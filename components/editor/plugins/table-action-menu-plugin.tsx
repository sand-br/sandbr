'use client'

/* eslint-disable no-unused-vars */

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as React from 'react'
import { ReactPortal, useCallback, useEffect, useRef, useState, JSX } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLexicalEditable } from '@lexical/react/useLexicalEditable'
import {
  $deleteTableColumn__EXPERIMENTAL,
  $deleteTableRow__EXPERIMENTAL,
  $getNodeTriplet,
  $getTableCellNodeFromLexicalNode,
  $getTableNodeFromLexicalNodeOrThrow,
  $insertTableColumn__EXPERIMENTAL,
  $insertTableRow__EXPERIMENTAL,
  $isTableCellNode,
  $isTableSelection,
  $unmergeCell,
  HTMLTableElementWithWithTableSelectionState,
  TableCellNode,
  TableSelection,
  getTableObserverFromTableElement,
} from '@lexical/table'
import type { ElementNode, LexicalEditor } from 'lexical'
import {
  $createParagraphNode,
  $getRoot,
  $getSelection,
  $isElementNode,
  $isParagraphNode,
  $isRangeSelection,
  $isTextNode,
} from 'lexical'
import { ChevronDownIcon } from 'lucide-react'
import { createPortal } from 'react-dom'

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { useEditorModal } from '@/components/editor/editor-hooks/use-modal'

function computeSelectionCount(selection: TableSelection): {
  columns: number
  rows: number
} {
  const selectionShape = selection.getShape()
  return {
    columns: selectionShape.toX - selectionShape.fromX + 1,
    rows: selectionShape.toY - selectionShape.fromY + 1,
  }
}

function $canUnmerge(): boolean {
  const selection = $getSelection()
  if (
    ($isRangeSelection(selection) && !selection.isCollapsed()) ||
    ($isTableSelection(selection) && !selection.anchor.is(selection.focus)) ||
    (!$isRangeSelection(selection) && !$isTableSelection(selection))
  ) {
    return false
  }
  const [cell] = $getNodeTriplet(selection.anchor)
  return cell.__colSpan > 1 || cell.__rowSpan > 1
}

function $cellContainsEmptyParagraph(cell: TableCellNode): boolean {
  if (cell.getChildrenSize() !== 1) {
    return false
  }
  const firstChild = cell.getFirstChildOrThrow()
  if (!$isParagraphNode(firstChild) || !firstChild.isEmpty()) {
    return false
  }
  return true
}

function $selectLastDescendant(node: ElementNode): void {
  const lastDescendant = node.getLastDescendant()
  if ($isTextNode(lastDescendant)) {
    lastDescendant.select()
  } else if ($isElementNode(lastDescendant)) {
    lastDescendant.selectEnd()
  } else if (lastDescendant !== null) {
    lastDescendant.selectNext()
  }
}

function currentCellBackgroundColor(editor: LexicalEditor): null | string {
  return editor.getEditorState().read(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection) || $isTableSelection(selection)) {
      const [cell] = $getNodeTriplet(selection.anchor)
      if ($isTableCellNode(cell)) {
        return cell.getBackgroundColor()
      }
    }
    return null
  })
}

type TableCellActionMenuProps = Readonly<{
  contextRef: { current: null | HTMLElement }
  onClose: () => void
  setIsMenuOpen: (isOpen: boolean) => void
  tableCellNode: TableCellNode
  cellMerge: boolean
}>

function TableActionMenu({
  onClose,
  tableCellNode: _tableCellNode,
  setIsMenuOpen,
  contextRef,
  cellMerge,
}: TableCellActionMenuProps) {
  const [editor] = useLexicalComposerContext()
  const dropDownRef = useRef<HTMLDivElement | null>(null)
  const [tableCellNode, updateTableCellNode] = useState(_tableCellNode)
  const [selectionCounts, updateSelectionCounts] = useState({
    columns: 1,
    rows: 1,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modal, showModal] = useEditorModal()
  const [canMergeCells, setCanMergeCells] = useState(false)
  const [canUnmergeCell, setCanUnmergeCell] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [backgroundColor, setBackgroundColor] = useState(
    () => currentCellBackgroundColor(editor) || ''
  )

  useEffect(() => {
    return editor.registerMutationListener(
      TableCellNode,
      (nodeMutations) => {
        const nodeUpdated =
          nodeMutations.get(tableCellNode.getKey()) === 'updated'

        if (nodeUpdated) {
          editor.getEditorState().read(() => {
            updateTableCellNode(tableCellNode.getLatest())
          })
          setBackgroundColor(currentCellBackgroundColor(editor) || '')
        }
      },
      { skipInitialization: true }
    )
  }, [editor, tableCellNode])

  useEffect(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection()
      // Merge cells
      if ($isTableSelection(selection)) {
        const currentSelectionCounts = computeSelectionCount(selection)
        updateSelectionCounts(computeSelectionCount(selection))
        setCanMergeCells(
          currentSelectionCounts.columns > 1 || currentSelectionCounts.rows > 1
        )
      }
      // Unmerge cell
      setCanUnmergeCell($canUnmerge())
    })
  }, [editor])

  useEffect(() => {
    const menuButtonElement = contextRef.current
    const dropDownElement = dropDownRef.current
    const rootElement = editor.getRootElement()

    if (
      menuButtonElement != null &&
      dropDownElement != null &&
      rootElement != null
    ) {
      const rootEleRect = rootElement.getBoundingClientRect()
      const menuButtonRect = menuButtonElement.getBoundingClientRect()
      dropDownElement.style.opacity = '1'
      const dropDownElementRect = dropDownElement.getBoundingClientRect()
      const margin = 5
      let leftPosition = menuButtonRect.right + margin
      if (
        leftPosition + dropDownElementRect.width > window.innerWidth ||
        leftPosition + dropDownElementRect.width > rootEleRect.right
      ) {
        const position =
          menuButtonRect.left - dropDownElementRect.width - margin
        leftPosition = (position < 0 ? margin : position) + window.pageXOffset
      }
      dropDownElement.style.left = `${leftPosition + window.pageXOffset}px`

      let topPosition = menuButtonRect.top
      if (topPosition + dropDownElementRect.height > window.innerHeight) {
        const position = menuButtonRect.bottom - dropDownElementRect.height
        topPosition = (position < 0 ? margin : position) + window.pageYOffset
      }
      dropDownElement.style.top = `${topPosition + +window.pageYOffset}px`
    }
  }, [contextRef, dropDownRef, editor])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current != null &&
        contextRef.current != null &&
        !dropDownRef.current.contains(event.target as Node) &&
        !contextRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => window.removeEventListener('click', handleClickOutside)
  }, [setIsMenuOpen, contextRef])

  const clearTableSelection = useCallback(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode)
        const tableElement = editor.getElementByKey(
          tableNode.getKey()
        ) as HTMLTableElementWithWithTableSelectionState

        if (!tableElement) {
          throw new Error('Expected to find tableElement in DOM')
        }

        const tableObserver = getTableObserverFromTableElement(tableElement)
        if (tableObserver !== null) {
          tableObserver.$clearHighlight()
        }

        tableNode.markDirty()
        updateTableCellNode(tableCellNode.getLatest())
      }

      const rootNode = $getRoot()
      rootNode.selectStart()
    })
  }, [editor, tableCellNode])

  const mergeTableCellsAtSelection = () => {
    editor.update(() => {
      const selection = $getSelection()
      if ($isTableSelection(selection)) {
        const { columns, rows } = computeSelectionCount(selection)
        const nodes = selection.getNodes()
        let firstCell: null | TableCellNode = null
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          if ($isTableCellNode(node)) {
            if (firstCell === null) {
              node.setColSpan(columns).setRowSpan(rows)
              firstCell = node
              const isEmpty = $cellContainsEmptyParagraph(node)
              let firstChild
              if (
                isEmpty &&
                $isParagraphNode((firstChild = node.getFirstChild()))
              ) {
                firstChild.remove()
              }
            } else if ($isTableCellNode(firstCell)) {
              const isEmpty = $cellContainsEmptyParagraph(node)
              if (!isEmpty) {
                firstCell.append(...node.getChildren())
              }
              node.remove()
            }
          }
        }
        if (firstCell !== null) {
          if (firstCell.getChildrenSize() === 0) {
            firstCell.append($createParagraphNode())
          }
          $selectLastDescendant(firstCell)
        }
        onClose()
      }
    })
  }

  const unmergeTableCellsAtSelection = () => {
    editor.update(() => {
      $unmergeCell()
    })
  }

  const insertTableRowAtSelection = useCallback(
    (shouldInsertAfter: boolean) => {
      editor.update(() => {
        $insertTableRow__EXPERIMENTAL(shouldInsertAfter)
        onClose()
      })
    },
    [editor, onClose]
  )

  const insertTableColumnAtSelection = useCallback(
    (shouldInsertAfter: boolean) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.columns; i++) {
          $insertTableColumn__EXPERIMENTAL(shouldInsertAfter)
        }
        onClose()
      })
    },
    [editor, onClose, selectionCounts.columns]
  )

  const deleteTableRowAtSelection = useCallback(() => {
    editor.update(() => {
      $deleteTableRow__EXPERIMENTAL()
      onClose()
    })
  }, [editor, onClose])

  const deleteTableAtSelection = useCallback(() => {
    editor.update(() => {
      const tableNode = $getTableNodeFromLexicalNodeOrThrow(tableCellNode)
      tableNode.remove()

      clearTableSelection()
      onClose()
    })
  }, [editor, tableCellNode, clearTableSelection, onClose])

  const deleteTableColumnAtSelection = useCallback(() => {
    editor.update(() => {
      $deleteTableColumn__EXPERIMENTAL()
      onClose()
    })
  }, [editor, onClose])

  let mergeCellButton: null | JSX.Element = null
  if (cellMerge) {
    if (canMergeCells) {
      mergeCellButton = (
        <CommandItem onSelect={() => mergeTableCellsAtSelection()}>
          Mesclar
        </CommandItem>
      )
    } else if (canUnmergeCell) {
      mergeCellButton = (
        <CommandItem onSelect={() => unmergeTableCellsAtSelection()}>
          Separar
        </CommandItem>
      )
    }
  }

  return (
    <>
      {modal}
      <Command>
        <CommandList>
          <CommandGroup>
            {mergeCellButton}
            <CommandItem onSelect={() => insertTableRowAtSelection(false)}>
              Inserir{' '}
              {selectionCounts.rows === 1
                ? 'linha'
                : `${selectionCounts.rows} linhas`}{' '}
              acima
            </CommandItem>
            <CommandItem onSelect={() => insertTableRowAtSelection(true)}>
              Inserir{' '}
              {selectionCounts.rows === 1
                ? 'linha'
                : `${selectionCounts.rows} linhas`}{' '}
              abaixo
            </CommandItem>
            <CommandSeparator />
            <CommandItem onSelect={() => insertTableColumnAtSelection(false)}>
              Inserir{' '}
              {selectionCounts.columns === 1
                ? 'coluna'
                : `${selectionCounts.columns} colunas`}{' '}
              à esquerda
            </CommandItem>
            <CommandItem onSelect={() => insertTableColumnAtSelection(true)}>
              Inserir{' '}
              {selectionCounts.columns === 1
                ? 'coluna'
                : `${selectionCounts.columns} colunas`}{' '}
              à direita
            </CommandItem>
            <CommandSeparator />
            <CommandItem onSelect={() => deleteTableColumnAtSelection()}>
              Excluir coluna
            </CommandItem>
            <CommandItem onSelect={() => deleteTableRowAtSelection()}>
              Excluir linha
            </CommandItem>
            <CommandItem onSelect={() => deleteTableAtSelection()}>
              Excluir tabela
            </CommandItem>
            <CommandSeparator />
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  )
}

function TableCellActionMenuContainer({
  anchorElem,
  cellMerge,
}: {
  anchorElem: HTMLElement
  cellMerge: boolean
}): JSX.Element {
  const [editor] = useLexicalComposerContext()

  const menuButtonRef = useRef(null)
  const menuRootRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [tableCellNode, setTableMenuCellNode] = useState<TableCellNode | null>(
    null
  )

  const $moveMenu = useCallback(() => {
    const menu = menuButtonRef.current
    const selection = $getSelection()
    const nativeSelection = window.getSelection()
    const activeElement = document.activeElement

    if (selection == null || menu == null) {
      setTableMenuCellNode(null)
      return
    }

    const rootElement = editor.getRootElement()

    if (
      $isRangeSelection(selection) &&
      rootElement !== null &&
      nativeSelection !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const tableCellNodeFromSelection = $getTableCellNodeFromLexicalNode(
        selection.anchor.getNode()
      )

      if (tableCellNodeFromSelection == null) {
        setTableMenuCellNode(null)
        return
      }

      const tableCellParentNodeDOM = editor.getElementByKey(
        tableCellNodeFromSelection.getKey()
      )

      if (tableCellParentNodeDOM == null) {
        setTableMenuCellNode(null)
        return
      }

      setTableMenuCellNode(tableCellNodeFromSelection)
    } else if (!activeElement) {
      setTableMenuCellNode(null)
    }
  }, [editor])

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        $moveMenu()
      })
    })
  })

  useEffect(() => {
    const menuButtonDOM = menuButtonRef.current as HTMLButtonElement | null

    if (menuButtonDOM != null && tableCellNode != null) {
      const tableCellNodeDOM = editor.getElementByKey(tableCellNode.getKey())

      if (tableCellNodeDOM != null) {
        const tableCellRect = tableCellNodeDOM.getBoundingClientRect()
        const menuRect = menuButtonDOM.getBoundingClientRect()
        const anchorRect = anchorElem.getBoundingClientRect()

        const top = tableCellRect.top - anchorRect.top + 4
        const left = tableCellRect.right - menuRect.width - 10 - anchorRect.left

        menuButtonDOM.style.opacity = '1'
        menuButtonDOM.style.transform = `translate(${left}px, ${top}px)`
      } else {
        menuButtonDOM.style.opacity = '0'
        menuButtonDOM.style.transform = 'translate(-10000px, -10000px)'
      }
    }
  }, [menuButtonRef, tableCellNode, editor, anchorElem])

  const prevTableCellDOM = useRef(tableCellNode)

  useEffect(() => {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false)
    }

    prevTableCellDOM.current = tableCellNode
  }, [prevTableCellDOM, tableCellNode])

  return (
    <div
      className="table-cell-action-button-container absolute top-0 will-change-transform"
      ref={menuButtonRef}
    >
      {tableCellNode != null && (
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="relative flex cursor-pointer items-center justify-center bg-none"
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              ref={menuRootRef}
            >
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <TableActionMenu
              contextRef={menuRootRef}
              setIsMenuOpen={setIsMenuOpen}
              onClose={() => setIsMenuOpen(false)}
              tableCellNode={tableCellNode}
              cellMerge={cellMerge}
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}

export function TableActionMenuPlugin({
  anchorElem,
  cellMerge = false,
}: {
  anchorElem: HTMLDivElement | null
  cellMerge?: boolean
}): null | ReactPortal {
  const isEditable = useLexicalEditable()

  if (!anchorElem) {
    return null
  }

  return createPortal(
    isEditable ? (
      <TableCellActionMenuContainer
        anchorElem={anchorElem}
        cellMerge={cellMerge}
      />
    ) : null,
    anchorElem
  )
}

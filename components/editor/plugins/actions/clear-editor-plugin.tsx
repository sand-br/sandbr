'use client'

import { Trash2Icon } from 'lucide-react'
import { CLEAR_EDITOR_COMMAND } from 'lexical'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'


export function ClearEditorActionPlugin() {
  const [editor] = useLexicalComposerContext()

  return (
    <Dialog>
      <Tooltip disableHoverableContent>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size={'sm'} variant={'ghost'} className="p-2">
              <Trash2Icon className="h-4 w-4" />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>Descatar</TooltipContent>
      </Tooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Descatar</DialogTitle>
          <DialogDescription>
            Você está prestes a descartar o que escreveu, tem certeza?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={() => {
                editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined)
              }}
            >
              Sim
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

import { QuoteIcon } from "lucide-react"
import { $getSelection, $isRangeSelection } from "lexical"
import { $setBlocksType } from "@lexical/selection"
import { $createQuoteNode } from "@lexical/rich-text"

import { ComponentPickerOption } from "@/components/editor/plugins/picker/component-picker-option";

export function QuotePickerPlugin() {
  return new ComponentPickerOption('Citação', {
    icon: <QuoteIcon className="size-4" />,
    keywords: ['block quote'],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createQuoteNode())
        }
      }),
  })
  }
import { Heading1Icon, Heading2Icon, Heading3Icon } from "lucide-react"
import { $getSelection, $isRangeSelection } from "lexical"
import { $setBlocksType } from "@lexical/selection"
import { $createHeadingNode } from "@lexical/rich-text"

import { ComponentPickerOption } from "@/components/editor/plugins/picker/component-picker-option";

export function HeadingPickerPlugin({
  n
}: {
  n: 1 | 2 | 3
}) {
  return new ComponentPickerOption(`Título ${n}`, {
    icon: <HeadingIcons n={n} />,
    keywords: ['heading', 'header', `h${n}`],
    onSelect: (_, editor) =>
      editor.update(() => {
        const selection = $getSelection()
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(`h${n}`))
        }
      }),
  })
}

function HeadingIcons({ n }: { n: number }) {
  switch (n) {
    case 1:
      return <Heading1Icon className="size-4" />
    case 2:
      return <Heading2Icon className="size-4" />
    case 3:
      return <Heading3Icon className="size-4" />
  }
}
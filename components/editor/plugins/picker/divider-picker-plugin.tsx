import { MinusIcon } from "lucide-react";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";

import { ComponentPickerOption } from "@/components/editor/plugins/picker/component-picker-option";

export function DividerPickerPlugin() {
  return new ComponentPickerOption('Divisor', {
    icon: <MinusIcon className="size-4" />,
    keywords: ['horizontal rule', 'divider', 'hr'],
    onSelect: (_, editor) =>
      editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined),
  })
}
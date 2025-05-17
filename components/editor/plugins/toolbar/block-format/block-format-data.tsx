import {
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
  QuoteIcon,
  TextIcon,
} from 'lucide-react'

export const blockTypeToBlockName: Record<
  string,
  { label: string; icon: React.ReactNode }
> = {
  paragraph: {
    label: 'Parágrafo',
    icon: <TextIcon className="size-4" />,
  },
  h1: {
    label: 'Título 1',
    icon: <Heading1Icon className="size-4" />,
  },
  h2: {
    label: 'Título 2',
    icon: <Heading2Icon className="size-4" />,
  },
  h3: {
    label: 'Título 3',
    icon: <Heading3Icon className="size-4" />,
  },
  number: {
    label: 'Lista enumerada',
    icon: <ListOrderedIcon className="size-4" />,
  },
  bullet: {
    label: 'Lista',
    icon: <ListIcon className="size-4" />,
  },
  quote: {
    label: 'Citação',
    icon: <QuoteIcon className="size-4" />,
  },
}

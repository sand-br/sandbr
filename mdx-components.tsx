import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const esquivar_do_cabecalho = "scroll-mt-[calc(var(--header-height)+10px)]";
  return {
    h1: ({ children }) => (
      <h1 className={`text-xl font-semibold ${esquivar_do_cabecalho}`} id={children.toLowerCase().replace(/\s/g, '-')}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`text-lg font-semibold mt-2 ${esquivar_do_cabecalho}`} id={children.toLowerCase().replace(/\s/g, '-')}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`text-base font-semibold mt-2 ${esquivar_do_cabecalho}`} id={children.toLowerCase().replace(/\s/g, '-')}>{children}</h3>
    ),
    ul: ({ children }) => (
      <ul className="list-disc ml-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal ml-4">{children}</ol>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sandbr hover:underline"
      >
        {children}
      </a>
    ),
    hr: () => (
      <hr className="border-t border-gray-300 dark:border-gray-700 mt-2 mb-2" />
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 mb-2">{children}</p>
    ),
    code: ({ children }) => (
      <code className="px-1 py-0.5 font-mono">
        {children}
      </code>
    ),
    ...components,
  }
}
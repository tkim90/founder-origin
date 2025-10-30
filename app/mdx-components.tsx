import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    ...components,
  };
}

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-2xl font-bold text-black mt-6 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-xl font-bold text-black mt-5 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-lg font-bold text-black mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 text-zinc-800" {...props} />,
  a: (props: any) => <a className="underline text-zinc-800" target="_blank" rel="noopener noreferrer" {...props} />,
};

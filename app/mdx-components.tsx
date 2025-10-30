import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    ...components,
  };
}

export const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl font-semibold text-black mt-6 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl text-black mt-5 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl text-black mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="mb-4 text-zinc-800" {...props} />,
  a: (props: any) => <a className="underline text-zinc-800" target="_blank" rel="noopener noreferrer" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-zinc-800 space-y-1" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
};

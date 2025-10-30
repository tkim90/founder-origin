import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { LIST } from "./list";
import { mdxComponents } from "./mdx-components";

const COPY_HEADER = 'Modern examples of how companies got their first few customers';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEEEE8] font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-32 px-16 bg-[#EEEEE8] sm:items-start">

        <span className="text-3xl text-black">Founder Origins</span>
        <div className="flex gap-6">
          <h1 className="text-2xl tracking-tight text-black">
            {COPY_HEADER}
          </h1>
        </div>

          {LIST.map(v => (
            <div
              className="flex flex-col my-6"
              key={`${v.name}`}
            >
              <div className="flex items-center">
                { v.url ? (
                  <Link href={v.url} className="text-2xl text-black underline" target="_blank">
                    {v.name}
                  </Link>
                ) : (
                  <span className="text-2xl text-black">
                    {v.name}
                  </span>
                ) }
                {v.bootstrapped && (
                  <span className="bg-black text-white px-2 py-1 rounded-2xl text-sm ml-2">Bootstrapped</span>
                )}
              </div>
              <span className="text-xl text-gray-800 font-medium mb-4">{v.revenue}</span>
              <div className="prose prose-lg prose-invert prose-headings:text-2xl prose-headings:text-black text-zinc-800">
                <MDXRemote source={v.story} components={mdxComponents} />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}

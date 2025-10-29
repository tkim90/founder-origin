import { LIST } from "./list";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-32 px-16 bg-white dark:bg-black sm:items-start">
        Founder Origins
        <div className="flex gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            A curated list of examples of how companies got their first few customers
          </h1>
        </div>

          {LIST.map(v => (
            <div 
              className="flex flex-col my-6 border-2 border border-white rounded-xl p-8"
              key={`${v.name}`}
            >
              <span className="text-2xl">{v.name}</span>
              <span className="text-xl text-white/80 font-medium mb-4">{v.revenue}</span>
              <span className="text-xl">{v.story}</span>
            </div>
          ))}
      </main>
    </div>
  );
}

import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        {/* Пример картинки, можно убрать или заменить */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Основной контент */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Моя музыкальная платформа
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Здесь скоро появятся треки и плейлисты
          </p>
          <button className="mt-4 rounded bg-black text-white px-4 py-2 hover:bg-zinc-800">
            Загрузить трек
          </button>
        </div>

        {/* Ссылки на документацию можно оставить или удалить */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>

      </main>
    </div>
  );
}
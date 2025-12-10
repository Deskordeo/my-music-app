
console.log("PAGE RENDERED");
export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-sm rounded-2xl bg-zinc-900 p-8 shadow-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-pink-400 text-center mb-6">
          Seqsound
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Войдите, чтобы продолжить
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-pink-500"
          />

          <input
            type="password"
            placeholder="Пароль"
            className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-pink-500"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-pink-500 py-3 font-semibold text-black hover:bg-pink-400 transition"
          >
            Войти
          </button>
        </form>

        <p className="mt-6 text-center text-zinc-500 text-sm">
          Нет аккаунта?{" "}
          <a className="text-pink-400 hover:underline" href="#">
            Создать
          </a>
        </p>
      </div>
    </main>
  );
}
export default function Navbar() {
  return (

    <header className="border-b border-zinc-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        <h1 className="text-2xl font-bold">
          PLUMEREP
        </h1>

        <nav className="flex gap-6 text-sm">

          <a href="/">HOME</a>

          <a href="/">FAQ</a>

          <a href="/">DISCORD</a>

          <a href="/">TIKTOK</a>

        </nav>

      </div>

    </header>

  );
}
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="w-screen bg-slate-900">
        <nav className="text-white flex w-[50%] min-w-[200px] max-w-[350px]">
          <Link href="/calculadoras/pgc">PGC</Link>
          <Link href="/calculadoras/calorias">Calorias</Link>
          <Link href="/calculadoras/wip">WIP</Link>
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </>
  );
}

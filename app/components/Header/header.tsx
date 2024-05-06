import Link from "next/link";

export default function Header(){
  return (
    <header className="mt-3">
      <Link href="/" className="text-5xl">Лучшие афоризмы мира</Link>
    </header>
  );
};
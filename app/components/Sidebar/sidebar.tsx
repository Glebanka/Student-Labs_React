import Link from 'next/link';

export default function Sidebar(){
  const Wisdom = {
    tags: 'Wisdom',
  };
  return (
    <div className="flex flex-col">
      <Link href={{pathname: '/category', query: Wisdom }}>
        Wisdom
      </Link>
      <a>Категория 2</a>
    </div>
  );
};
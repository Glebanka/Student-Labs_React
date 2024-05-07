import Link from "next/link";

export interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  tags: string[];
}
export default function Aphorism({ note } : { note: Quote }){
  return (
    <div className="border border-l-0 border-t-0 pb-3 pr-3 rounded-br-xl flex flex-col gap-2">
        <div>{note.content}</div>
        <div >{note.author}</div>
        {/* добавить иконку сюда */}
        <div className="self-end">{note.tags.join(', ')}</div>
    </div>
  );
};
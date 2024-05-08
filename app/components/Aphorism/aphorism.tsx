import LikeButton from "../LikeButton/likeButton";
import { AuthorSVG } from "../SVG/authorSVG";

export interface Quote {
  _id: string;
  content: string;
  author: string;
  authorSlug: string;
  tags: string[];
}
export default function Aphorism({ note } : { note: Quote }){

  return (
    <div className="border border-l-0 border-t-0 pb-3 pr-3 pt-1 pl-1 rounded-br-xl flex flex-col gap-2 relative">
        <LikeButton postId={note._id}></LikeButton>
        <div className="flex gap-1 text-xl pr-7">{note.content}</div>
        <div className="flex gap-1"><AuthorSVG></AuthorSVG>{note.author}</div>
        <div className="self-end flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256"><path fill="currentColor" d="M243.31 136L144 36.69A15.86 15.86 0 0 0 132.69 32H40a8 8 0 0 0-8 8v92.69A15.86 15.86 0 0 0 36.69 144L136 243.31a16 16 0 0 0 22.63 0l84.68-84.68a16 16 0 0 0 0-22.63m-96 96L48 132.69V48h84.69L232 147.31ZM96 84a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>{note.tags.join(', ')}</div>
    </div>
  );
};
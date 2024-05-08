import Link from "next/link";
import LikeButton from "../LikeButton/likeButton";
import { AuthorSVG } from "../SVG/authorSVG";
import { TagSVG } from "../SVG/tagSVG";
import React from "react";


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
        <div className="self-end flex gap-1 items-center"><TagSVG />{note.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Link className='hover:text-gray-400' key={index} href={{ pathname: '/category', query: { tags: tag } }}>
              {tag}
            </Link>
            {index < note.tags.length - 1 && '| '}
          </React.Fragment>
  ))}</div>
    </div>
  );
};
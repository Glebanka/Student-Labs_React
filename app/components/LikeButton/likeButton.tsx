import { LikeSVG } from "../SVG/likeSVG";
import { ActiveLikeSVG } from "../SVG/activeLikeSVG";
import { useState, useEffect } from "react";

export default function LikeButton({postId}: {postId : string}){
  const [liked, setLiked] = useState<boolean>();

  
  useEffect(() => {
    // Получаем текущий список лайкнутых постов из локального хранилища
    const likedPosts: string[] = JSON.parse(localStorage.getItem('likedPosts') || '[]');
  
    // Проверяем, есть ли текущий пост в списке лайкнутых
    const isLiked: boolean = likedPosts.includes(postId);
    // Устанавливаем начальное состояние liked в зависимости от результата проверки
    setLiked(isLiked);
  }, [postId]);
  
  const handleLikeClick = (postId : string) => {
    // Получаем текущий список лайкнутых постов из локального хранилища
    const likedPosts: string[] = JSON.parse(localStorage.getItem('likedPosts') || '[]');
  
    // Проверяем, есть ли текущий пост в списке лайкнутых
    const isLiked: boolean = likedPosts.includes(postId);
    // Если пост уже лайкнут, убираем его из списка, иначе добавляем
    if (isLiked) {
      const updatedLikedPosts: string[] = likedPosts.filter((id) => id !== postId);// Оставляем только те значения, которые не передаваемый postId
      setLiked(false);
      localStorage.setItem('likedPosts', JSON.stringify(updatedLikedPosts));// Записываем в localStorage
    } else {
      likedPosts.push(postId);// Сначала добавляем в наш массив
      setLiked(true);// Меняем состояние
      localStorage.setItem('likedPosts', JSON.stringify(likedPosts));// Потом закидываем в localStorage
    }
  };
return(
  <button onClick={() => handleLikeClick(postId)}>
        {liked ? (
          // SVG для дизлайка
          <ActiveLikeSVG className="absolute right-0 mr-3"></ActiveLikeSVG>
        ) : (
          // SVG для лайка
          <LikeSVG className="absolute right-0 mr-3"></LikeSVG>
        )}
  </button>
)
}

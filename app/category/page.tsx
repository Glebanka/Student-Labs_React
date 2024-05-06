'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/sidebar';

interface Aphorism {
  _id: string;
  content: string;
}

export default function category(){

  const tags = useSearchParams().get("tags");

  const [aphorism, setAphorism] = useState<Aphorism[]>([]);


  useEffect(() => {
    const loadAphorism = () => {
      axios.get('https://api.quotable.io/quotes/random?tags='+tags+'&limit=10')
        .then(response => {
          console.log('Афоризмы загружены', response.data);
          setAphorism(response.data);
        })
        .catch(error => {
          console.error('Ошибка загрузки афоризмов:', error);
        });
    };
    
    // Загружаем афоризм после монтирования компонента
    loadAphorism();
}, []);

  return (
    <div className="contentWrapper">
      <main className="flex flex-col gap-10 w-4/5">
        В категории Wisdom
        {aphorism.map(note => (
          <div key={note._id}>{note.content}</div>
        ))}
      </main>
      <Sidebar />
    </div>
  );
};
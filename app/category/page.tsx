'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar/sidebar';
import Aphorism from '../components/Aphorism/aphorism';
import { Quote } from '../components/Aphorism/aphorism';

export default function category(){

  const tags = useSearchParams().get("tags");
  
  const [aphorism, setAphorism] = useState<Quote[]>([]);

  
  const loadAphorism = () => {
    axios.get('https://api.quotable.io/quotes/random?tags='+tags+'&limit=100')
      .then(response => {
        console.log('Афоризмы загружены', response.data);
        setAphorism(response.data);
      })
      .catch(error => {
        console.error('Ошибка загрузки афоризмов:', error);
      });
  };
  useEffect(() => {
    loadAphorism();
  }, [tags]);

  return (
    <div className="contentWrapper">
      <main className="flex flex-col gap-10 w-4/5">
        <p className='text-4xl'>
            В категории {tags}
        </p>
            {aphorism.map(note => (
              <Aphorism key={note._id} note={note}/>
            ))}
      </main>
      <Sidebar />
    </div>
  );
};
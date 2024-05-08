'use client'
import Aphorism from "./components/Aphorism/aphorism";
import Sidebar from './components/Sidebar/sidebar';
import { Quote } from "./components/Aphorism/aphorism";

import axios from 'axios';
import { useState, useEffect} from 'react';

//Добавить адаптивную верстку
//Перепрочитать тз

export default function Home() {
  const [aphorism, setAphorism] = useState<Quote[]>([]);
  
  const loadAphorism = () => {
    axios.get('https://api.quotable.io/quotes/random?limit=30')
      .then(response => {
        console.log('Афоризм загружен', response.data);
        setAphorism(response.data);
      })
      .catch(error => {
        console.error('Ошибка загрузки афоризма:', error);
      });
  };
  useEffect(() => {
        loadAphorism();
  }, []);
  
  return (
    <div className="contentWrapper gap-10">

      <main className="flex flex-col gap-10 w-full lg:w-4/5">
        
      {aphorism.map(note => (
        <Aphorism key={note._id} note={note}/>
      ))}
      </main>
      <Sidebar />
    </div>
  );
}

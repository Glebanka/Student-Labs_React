import axios from 'axios';
import { useState, useEffect} from 'react';

interface Aphorism {
  _id: string;
  content: string;
}

export default function Aphorism(){
  const [aphorism, setAphorism] = useState<Aphorism[]>([]);
  
  useEffect(() => {
        const loadAphorism = () => {
          axios.get('https://api.quotable.io/quotes/random?tags=wisdom|famous-quotes')
            .then(response => {
              console.log('Афоризм загружен', response.data);
              setAphorism(response.data);
            })
            .catch(error => {
              console.error('Ошибка загрузки афоризма:', error);
            });
        };
        
        // Загружаем афоризм после монтирования компонента
        loadAphorism();
  }, []);

  return (
    <div className="border border-l-0 border-t-0 pb-3 pr-3 rounded-br-xl">
      {aphorism.map(note => (
        <div key={note._id}>{note.content}</div>
      ))}
    </div>
  );
};
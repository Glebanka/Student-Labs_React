import Link from 'next/link';
import { useState, useEffect} from 'react';
import axios from 'axios';

export interface Categories {
  _id: string;
  name: string;
}

export default function Sidebar(){
  const [category, setCategory] = useState<Categories[]>([]);

  useEffect(() => {
    const loadAphorism = () => {
      axios.get('https://api.quotable.io/tags')
        .then(response => {
          console.log('Категории загружены', response.data);
          setCategory(response.data);
        })
        .catch(error => {
          console.error('Ошибка загрузки категорий:', error);
        });
    };
    
    // Загружаем афоризм после монтирования компонента
    loadAphorism();
}, []);
  return (
    <div className="flex flex-row flex-wrap lg:gap-0 gap-5 items-center lg:flex-col ">
      <p className='text-5xl lg:text-xl self-center'>По категориям</p>
        {category.map(category => (
          <Link className='hover:text-gray-400' key={category._id} href={{ pathname: '/category', query: { tags: category.name } }}>
              {category.name}
          </Link>
        ))}
    </div>
  );
};
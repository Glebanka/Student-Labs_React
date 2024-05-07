import Link from 'next/link';
import { useState, useEffect} from 'react';
import axios from 'axios';

export interface Categories {
  _id: string;
  name: string;
  slug: string;
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
    <div className="flex flex-col items-center">
      <p className='text-xl'>По категориям</p>
        {category.map(category => (
          <Link key={category._id} href={{ pathname: '/category', query: { tags: category.slug } }}>
              {category.name}
          </Link>
        ))}
    </div>
  );
};
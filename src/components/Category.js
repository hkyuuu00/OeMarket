import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

export default function Category() {
  const categoryList = ['전자제품', '가구 | 인테리어', '패션', '생활 | 주방', '가공식품', '스포츠 | 레저', '취미 | 게임 | 음반', '뷰티'];
  
  return (
    <div className='menu'>
      <ul className='category'>
        {categoryList.map((category) => 
          <li key={category} className='link'>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Item.css';

export default function Item({topics}) {
  const location = useLocation();
  const pathName = decodeURIComponent(location.pathname.split('/').pop());
  console.log(pathName);
  const topic = topics.find((topic) => topic.title === pathName);

  if (!topic) {
    return <div>해당 주제를 찾을 수 없습니다.</div>;
  }

  return (
    <div className='itemPage'>
      <p className='itemCategory'>카테고리 {'>'} {topic.category}</p><br/>
      <table className='itemTable'>
        <tr>
          <td className='itemTdimg'>
            <img src={"img/" + topic.image} className='itemImg'/>
          </td>
          <td className='itemTd'>
            <h1 className='itemName'>{topic.title}</h1>
            <p className='itemPrice'>{topic.price}원</p>
            <p className='itemLocation'>지역: {topic.location}</p>
            <p className='itemStatus'>상태: {topic.status}</p>
            <p className='itemDelCost'>배송비: {topic.delCost}원</p>
            <button className='itemLike'>찜♡</button>
            <button className='itemBuy'>채팅하기</button>
          </td>
        </tr>
        <tr>
          <td colspan="2" className='itemTd2'>
            <p className='info'>상품정보</p>
            <p className='itemInfo'>{topic.body}</p>
          </td>
        </tr>
      </table>
    </div>
  );
}

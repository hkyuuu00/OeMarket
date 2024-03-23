import React from 'react'
import './Like.css'
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Like({topics, setTopics}) {
  const rows = [];
  let cells = [];
  if (!topics) {
    return null;
  }
  topics.forEach((topic, index) => {
    if (topic.like) {
      cells.push(
        <React.Fragment key={index}>
          <span onClick={()=>{
            setTopics(topics.map((item, itemIndex) => 
              itemIndex === index ? {...item, like: !item.like} : item
            ));
          }}>
            {topic.like ? <GoHeartFill className='like'/> : <GoHeart className='like'/>}
          </span>
          <Link to={`/${topic.title}`}>
          <td className='td'>
            <img src={"img/" + topic.image} className='articleImg'/><br/>
            <span className='t_title'>{topic.title}</span><br/>
            <span className='t_price'>{topic.price}원</span><br/>
            <IoLocationOutline/><span className='t_location'>{topic.location}</span><br/>
          </td>
          </Link>
        </React.Fragment>
      )};
  
      if ((index + 1) % 4 === 0) {
        rows.push(<tr key={index / 4}>{cells}</tr>);
        cells = [];
      }
    });
  
    if (cells.length > 0) {
      rows.push(<tr key={rows.length}>{cells}</tr>);
    }
  
  return (
    <div className='article'>
      <table className='table'>
        {rows}
      </table>
    </div>
  )
}

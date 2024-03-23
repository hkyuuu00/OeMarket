import React from 'react'
import './Header.css'
import { IoMdSearch } from "react-icons/io";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>
      <Link to="/"><img src='img/logo.png' className='logoImg'/></Link>
      <input type='text' className='search' placeholder='검색'></input>
      <button className='searchButton'><IoMdSearch className='searchLogo'/></button>
      <Link to="/wishList" className='wishList'>찜 목록</Link>
    </div>
  )
}
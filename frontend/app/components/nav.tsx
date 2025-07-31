"use client"
import React, { useState,useEffect } from 'react'
import "./home.css"
import SunIcon from '../img/sun'
import MoonIcon from "../img/moon"
import Link from 'next/link'

const Home: React.FC = () => {
  const [dark, setColor] = useState<Boolean>(true);

  const changeColor = () => {
    dark ? setColor(false) : setColor(true);
  }

  useEffect(()=>{
    document.body.style.backgroundColor = dark ? "#000000" : "#ffffff";
  },[dark])

  return ( 
    <div className='home' style={{color:dark?"#cccccc":"#000000"}}>
      <nav className='c'>
        <div><h2>DevLink</h2></div>
        <div className='c' style={{ gap: "50px" }}>
          <div className='c' style={{ listStyle: "none", gap: "30px" }}>
            <li>Home</li>
            <li><Link className={dark?"dark":"light"} href="/signin">SignIn</Link></li>
            <li className='login'>LogIn</li>
          </div>
          {dark ? <div className='c' onClick={changeColor}><SunIcon /></div> : <div className='c' onClick={changeColor}><MoonIcon/></div>}
        </div>
      </nav>
    </div>
  )
}

export default Home;
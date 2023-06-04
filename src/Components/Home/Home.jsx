import React, { useState } from 'react'
import Card from '../Card/Card'
import Sidebar from '../Sidebar/sidebar'
import './Home.css'
import Data from '../../Data.js'

const Home = () => {

  
  return (
    <>
    <div className='SideBar'>
      <Sidebar/>
    </div>
    <i class="fa-solid fa-bars hamburger"></i>
    <div className='MainContent'>
      <div className="searchContents">
        <div className='search'>
          <input type="text" name='searchQuery' placeholder='Search'/>
          <span><i className='fa-solid fa-magnifying-glass'></i></span>
        </div>
        <button className='btn'>Connect</button>
      </div>
      <h2>Token Search Results</h2>
      <div className="cards">
        {
          Data.map((item,i)=>{
            return <Card key={i} item={item}/>
          })
        }
        {
          Data.map((item,i)=>{
            return <Card key={i} item={item}/>
          })
        }
        {
          Data.map((item,i)=>{
            return <Card key={i} item={item}/>
          })
        }
      </div>
    </div>
    <div className='footbar'></div> 
    </>
  )
}

export default Home

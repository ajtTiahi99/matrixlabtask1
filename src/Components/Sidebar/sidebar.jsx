import React from 'react'
import './sidebar.css'

const Sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="logo">
          <span className='icon'><i class="fa-solid fa-image"></i></span>
          <span className='title'>NFTify</span>
        </div>
        <div className="tokens">
          <div className="access">
            <span><i class="fa-solid fa-image"></i></span>
            <h3>Access Tokens</h3>
          </div>
          <div className="pair">
            <span><i class="fa-solid fa-vector-square"></i></span>
            <h3>Pair Address</h3>
          </div>
        </div>
        <div className="socials">
          <span><i className="fa-brands fa-square-facebook"></i></span>
          <span><i className="fa-brands fa-linkedin"></i></span>
          <span><i className="fa-brands fa-square-twitter"></i></span>
        </div>
    </div>
  )
}

export default Sidebar

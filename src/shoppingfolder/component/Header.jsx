import React from 'react'

const Header = () => {
  return (
    <div className='headersection'>
      <div className='left'>
        <div className="title">
          <img src='./../assets/logo.png' alt='logo' width="100px" height="60px" />
      
        </div>
      </div>
      <div className="center">
        <ul>
          <li>Fashion</li>
          <li>Woman</li>
          <li>Man</li>
          <li>Kids</li>
          <li>Accessories</li>  
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="right">
        <div className="signin">Sign In/Out</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'

export default function Header({ onClick, menuOpen }) {
  return (
    <header>

      <h1>所有产品</h1>

      <div className='nav-menu'>
        <button onClick={() => !menuOpen && onClick()}>
          <img src='hamburger.png' alt='menu icon'></img>
        </button>
        {menuOpen &&
        <nav className='vertical'>
          <span>主页</span>
          <span>我的收藏</span>
          <span>登出</span>
        </nav>
        }
        {/* Hide in mobile view by CSS */}
        <nav className='horizontal'>
          <span>主页</span>
          <span>我的收藏</span>
          <span>登出</span>
        </nav>
      </div>
      
    </header>
  )
}

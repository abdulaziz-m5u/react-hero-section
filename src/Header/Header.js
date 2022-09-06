import React, { useState } from 'react';
import { HeaderStyle } from './Header.style.js';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <HeaderStyle showMenu={toggle ? 'show-menu' : ''}>
      <nav className='container'>
        <a href='#/' className='nav-logo'>
          Samantha Ming
        </a>

        <div className='nav-menu'>
          <ul className='nav-list row'>
            <a
              href='https://www.youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
            >
              <i className='ri-youtube-line'></i>
            </a>
            <a
              href='https://www.dribbble.com'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
            >
              <i className='ri-dribbble-line'></i>
            </a>
            <a
              href='https://www.github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
            >
              <i className='ri-github-line'></i>
            </a>
          </ul>
          <i
            className='nav-close ri-close-line'
            onClick={() => setToggle(false)}
          ></i>
        </div>

        <div className='nav-toggle' onClick={() => setToggle(true)}>
          <i className='ri-apps-2-line'></i>
        </div>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

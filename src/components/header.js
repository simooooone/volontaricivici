import React, { useEffect, useCallback } from 'react';
import Menu from './menu';
import Logo from './logo';

const Header = () => {
  const handleScroll = useCallback(async () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= 1) {
      document.querySelector('.barraNavigazione').classList.add('fix');
    } else {
      document.querySelector('.barraNavigazione').classList.remove('fix');
    }
  }, []);
  
  useEffect(() => {
    if (window.innerWidth > 991) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <header className="header">
      <div className="barraNavigazione w-full">
        <div className="contBarra px-4">
          <div className="contLogo">
            <Logo />
          </div>
          <div className="contMenu">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

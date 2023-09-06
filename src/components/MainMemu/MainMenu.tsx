import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './MainMenu.css';

const MainMenu: React.FC = () => {
  return (
    <div className="Wrapper">
        <Link to="/game1" className="Link">Game1</Link>
        <Link to="/game1" className="Link">Game1</Link>
        <Outlet />
    </div>
  );
}

export default MainMenu;
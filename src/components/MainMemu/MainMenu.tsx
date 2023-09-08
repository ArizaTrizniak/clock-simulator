import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './MainMenu.css';

const MainMenu: React.FC = () => {
  return (
    <div className="Wrapper">
        <Link to="/game1" className="Link">Set the clock to the specified time </Link>
        <Link to="/game2" className="Link">Set the clock to the specified time</Link>
        <Outlet />
    </div>
  );
}

export default MainMenu;
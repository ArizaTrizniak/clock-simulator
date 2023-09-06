import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  return (
      <>
          <div className="Layout">
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                  </ul>
              </nav>
              <Outlet />
          </div>
      </>
  )
}
export default Layout;
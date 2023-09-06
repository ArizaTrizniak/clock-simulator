import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import NoPage from "./Pages/NoPage";
import MainMenu from './components/MainMemu/MainMenu';
import Game1 from './Pages/Game1/Game1';

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<MainMenu />} />
                <Route path="game1" element={<Game1 />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

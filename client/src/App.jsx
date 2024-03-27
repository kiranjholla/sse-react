import React from 'react';
import { createRoot } from 'react-dom/client'; //https://stackoverflow.com/a/71743758
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Home</Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

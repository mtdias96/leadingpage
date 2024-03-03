// AppRoutes.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from '../pages/Content';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/product" exact element={<Content />} />
      </Routes>
    </BrowserRouter>
  );
}

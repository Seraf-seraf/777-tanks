import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Cases from './pages/Cases.jsx';
import Profile from './pages/Profile.jsx';
import { routes } from './services/routes.js';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.cases} element={<Cases />} />
          <Route path={routes.profile} element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

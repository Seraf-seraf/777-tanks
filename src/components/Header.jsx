import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../services/routes.js';

const player = {
  name: 'Игрок',
  balance: 0,
};

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to={routes.home}>Главная</Link>
        <Link to={routes.cases}>Кейсы</Link>
        <Link to={routes.profile}>Личный кабинет</Link>
      </nav>
      <div className="player-info">
        <span className="player-name">{player.name}</span>
        <span className="player-balance">{player.balance} ₽</span>
      </div>
    </header>
  );
}

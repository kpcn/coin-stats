import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ name }) => {
  return (
    <header className="grid justify-center py-12 bg-gradient-to-tl from-slate-800 to-blue-700 xl:rounded-md xl:my-2">
      <Link to="/">
        <h1 className="text-3xl text-white">{name}</h1>
      </Link>
    </header>
  );
};

export default Header;

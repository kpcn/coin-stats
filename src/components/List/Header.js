import React from 'react';

const Header = ({ names }) => {
  return (
    <header>
      <ul className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 px-2 mt-4 text-md font-semibold">
        {names &&
          names.map((name) => (
            <li
              className="p-4 last-of-type:hidden last-of-type:lg:block"
              key={name}
            >
              {name}
            </li>
          ))}
      </ul>
    </header>
  );
};

export default Header;

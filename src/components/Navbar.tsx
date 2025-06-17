import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  cartCount: number;
};

const Navbar: React.FC<Props> = ({ cartCount }) => {
  const { pathname } = useLocation();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Clothify</Link>
      </h1>
      <ul className="flex gap-4 text-sm">
        <li>
          <Link to="/" className={pathname === "/" ? "underline" : "hover:underline"}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className={pathname === "/shop" ? "underline" : "hover:underline"}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className={pathname === "/cart" ? "underline" : "hover:underline"}>
            Cart ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

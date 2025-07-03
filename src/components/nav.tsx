import "../index.css";
import "./nav.css";
import hamburger from "../assets/hamburger-icon.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/product?search=${encodeURIComponent(searchTerm)}`);
    setShowSearch(false); // Close the overlay after search
  };

  return (
    <header>
      <nav className="flex justify-between items-center w-[89%] mx-auto h-[67px]">
        {/* Logo + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            id="hamburger-btn"
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none hamburger-button"
          >
            <img src={hamburger} className="w-6 h-4" alt="Menu" />
          </button>

          <a href="/" className="self-center" aria-label="Home">
            <h1 className="text-3xl">GLAMIFY</h1>
          </a>
        </div>

        {/* Nav Links */}
        <ul
          className={`tenor-sans nav-links gap-8 flex-col absolute top-[67px] left-0 w-full bg-white p-4 z-10 transition-all duration-300 ease-in-out justify-center md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:static
            ${isMenuOpen ? "flex" : "hidden"}
            lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0`}
        >
          <li className="self-center"><a href="/product">WOMEN</a></li>
          <li className="self-center"><a href="/product">MEN</a></li>
          <li className="self-center"><a href="/product">LAST CHANCE</a></li>
          <li className="self-center"><a href="/product">CONTACT</a></li>
        </ul>

        {/* Icons */}
        <ul className="flex self-center gap-4 md:gap-8">
          <button
            className="search-btn"
            onClick={() => setShowSearch((prev) => !prev)}
            aria-label="Search"
            type="button"
          >
            <img className="" src="/src/assets/Search-icon.svg" alt="search-icon" />
          </button>
          <img className="icon hidden md:block" src="/src/assets/User-icon.svg" alt="user-icon" />
          <img className="icon hidden sm:block" src="/src/assets/Fvrt-icon.svg" alt="favorite-icon" />
          <Link to="/cart" className="relative">
            <img className="icon" src="/src/assets/Cart-icon.svg" alt="cart-icon" />
            {cartItems.length > 0 && (
              <span
                className="absolute bg-red-600 text-white text-xs rounded-full flex items-center justify-center"
                style={{
                  height: "15px",
                  width: "15px",
                  minWidth: "15px",
                  top: "-5px",
                  right: "-5px",
                  fontSize: "11px",
                  lineHeight: "15px",
                  padding: 0,
                }}
              >
                {cartItems.length}
              </span>
            )}
          </Link>
        </ul>

      {showSearch && (
        <div
          className="w-screen h-screen fixed backdrop-brightness-50 justify-center top-0 left-0 z-20 flex pt-16"
          onClick={() => setShowSearch(false)}
        >
          <form
            onSubmit={handleSearch}
            className="nav-search-form"
            onClick={e => e.stopPropagation()} // Prevent overlay close when clicking inside form
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button type="submit">
              <img src="/src/assets/Search-icon-2.svg" alt="search-icon" />
            </button>
          </form>
        </div>
      )}
      </nav>
    </header>
  );
}

export default Nav;

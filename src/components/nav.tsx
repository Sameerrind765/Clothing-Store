import "../index.css"
import "./nav.css"
import hamburger from "../assets/Hamburger-icon.svg"
function Nav() {
  return (
    <header>
      <nav className="flex justify-between align-center">
        <div className="logo align-center flex gap-4">
          <img src={hamburger} className="block hamburger lg:hidden icon self-center" alt="Menu" />
          <a href="/" className="logo self-center" aria-label="Home">
            <h1 className="text-3xl">GLAMIFY</h1>
          </a>
        </div>
        <ul className="tenor-sans nav-links hidden lg:flex xl:flex 2xl:flex gap-8">
          <li className="self-center"><a href="/product">WOMEN</a></li>
          <li className="self-center"><a href="/product">MEN</a></li>
          <li className="self-center"><a href="/product">LAST CHANCE</a></li>
          <li className="self-center"><a href="/product">CONTACT</a></li>
        </ul>
        <ul className="flex self-center gap-4 md:gap-8">
          <img className="icon" src="/src/assets/Search-icon.svg" alt="search-icon" />
          <img className="icon hidden md:block" src="/src/assets/User-icon.svg" alt="search-icon" />
          <img className="icon hidden sm:block" src="/src/assets/Fvrt-icon.svg" alt="search-icon" />
          <img className="icon" src="/src/assets/Cart-icon.svg" alt="search-icon" />
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
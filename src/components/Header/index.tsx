import { List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import LogoSite from '../../assets/img/logo-site.png'

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function openMenu() {
    if (isOpenMenu) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <header
      className="fixed z-50 bg-blue-700 w-full"
      onClick={() => isOpenMenu && openMenu()}
    >
      <div className="p-2 flex justify-between items-center w-full max-w-[1300px] mx-auto">
        <div className="flex items-center">
          <img className="h-14 w-full" alt="logo" src={ LogoSite }/>
        </div>
        <div
          className="block text-white hover:text-zinc-300 sm:hidden"
          onClick={openMenu}
        >
          {isOpenMenu ? <X size={35} /> : <List size={35} />}
        </div>
        <nav className="hidden text-lg items-center gap-6 sm:flex">
          <Link to="/" className="hover:font-medium">
            Home
          </Link>
          <Link to="/animais" className="hover:font-medium">
            Animais
          </Link>
          <Link to="/sobre" className="hover:font-medium">
            Quem Somos
          </Link>
          <Link to="/contato" className="hover:font-medium">
            Contato
          </Link>
        </nav>
        <div
          className={`fixed left-0 bottom-[-71px] h-full w-full z-30 bg-zinc-900 bg-opacity-[99%] transform-gpu transition-all sm:hidden ${
            isOpenMenu ? "-translate-y-0" : "translate-y-full"
          }`}
        >
          <nav className="h-full flex flex-col items-center justify-center gap-8 text-white text-2xl">
            <Link to="/" className="hover:font-medium">
              Home
            </Link>
            <Link to="/animais" className="hover:font-medium">
              Animais
            </Link>
            <Link to="/sobre" className="hover:font-medium">
              Quem Somos
            </Link>
            <Link to="/contato" className="hover:font-medium">
              Contato
            </Link>
          </nav>
        </div>
      </div>
      <hr className="border-zinc-900 w-4/5 mx-auto opacity-30" />
    </header>
  );
}

export default Header;

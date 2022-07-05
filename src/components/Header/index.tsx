import { Dog, List, X } from "phosphor-react";
import { useState } from "react";
import { Link } from 'react-router-dom'

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
      className="fixed z-50 bg-yellow-500 w-full"
      onClick={() => isOpenMenu && openMenu()}
    >
      <div className="p-2 flex justify-between items-center w-full max-w-[1300px] mx-auto">
        <div className="flex items-center">
          <Dog size={55} />
          <h1 className="text-1xl font-bold uppercase sm:text-2xl">Cãopanha</h1>
        </div>
        <div
          className="block hover:text-zinc-700 sm:hidden"
          onClick={openMenu}
        >
          {isOpenMenu ? <X size={35} /> : <List size={35} />}
        </div>
        <nav className="hidden items-center gap-6 sm:flex">
          <Link to="/" className="hover:font-semibold">
            Home
          </Link>
          <Link to="/animais" className="hover:font-semibold">
            Animais
          </Link>
          <Link to="/sobre" className="hover:font-semibold">
            Quem Somos
          </Link>
          <Link to="/contato" className="hover:font-semibold">
            Contato
          </Link>
        </nav>
        <div
          className={`fixed left-0 bottom-[-71px] h-full w-full z-30 bg-zinc-900 bg-opacity-[99%] transform-gpu transition-all sm:hidden ${
            isOpenMenu ? "-translate-y-0" : "translate-y-full"
          }`}
        >
          <nav className="h-full flex flex-col items-center justify-center gap-8 text-yellow-500 text-2xl">
            <Link to="/" className="hover:font-semibold">
              Home
            </Link>
            <Link to="/animais" className="hover:font-semibold">
              Animais
            </Link>
            <Link to="/sobre" className="hover:font-semibold">
              Quem Somos
            </Link>
            <Link to="/contato" className="hover:font-semibold">
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

import { Dog, List, X } from "phosphor-react";
import { useState } from "react";

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
        <button
          className="block hover:text-zinc-700 lg:hidden"
          onClick={openMenu}
        >
          {isOpenMenu ? <X size={35} /> : <List size={35} />}
        </button>
        <nav className="hidden items-center gap-6 lg:flex">
          <a href="#" className="hover:font-semibold">
            Home
          </a>
          <a href="#" className="hover:font-semibold">
            Animais
          </a>
          <a href="#" className="hover:font-semibold">
            Quem Somos
          </a>
          <a href="#" className="hover:font-semibold">
            Contato
          </a>
        </nav>
        <div
          className={`fixed left-0 bottom-[-71px] h-full w-full z-30 bg-zinc-900 bg-opacity-[99%] transform-gpu transition-all lg:hidden ${
            isOpenMenu ? "-translate-y-0" : "translate-y-full"
          }`}
        >
          <nav className="h-full flex flex-col items-center justify-center gap-8 text-yellow-500 text-2xl">
            <a href="#" className="hover:font-semibold">
              Home
            </a>
            <a href="#" className="hover:font-semibold">
              Animais
            </a>
            <a href="#" className="hover:font-semibold">
              Quem Somos
            </a>
            <a href="#" className="hover:font-semibold">
              Contato
            </a>
          </nav>
        </div>
      </div>
      <hr className="border-zinc-900 w-4/5 mx-auto opacity-30" />
    </header>
  );
}

export default Header;

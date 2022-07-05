import { PawPrint } from "phosphor-react";

function Footer() {
  return (
    <footer className="w-full">
      <hr className="border-zinc-900 w-4/5 mx-auto opacity-40" />
      <div className=" p-2 flex flex-col items-center gap-4 justify-between sm:flex-row w-full max-w-[1300px] mx-auto">
        <div className="flex items-center gap-2">
          <PawPrint size={40} />
          <span className="font-medium">Cãopanha - Uruguaiana</span>
        </div>
        <span className="text-sm">
          Desenvolvido por:{" "}
          <a
            className="font-medium"
            href="https://www.linkedin.com/in/edersonlucas/"
          >
            Ederson Lucas
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

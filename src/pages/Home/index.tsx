import LogoPix from "../../components/LogoPix";
import twoDogs from "../../assets/img/two-dogs.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Check } from "phosphor-react";
import { Snackbar } from "@mui/material";
import QrCodeGen from "../../components/QrCodeGen";
import { useGetInfosSiteQuery } from "../../graphql/generated";
import Loading from "../../components/Loading";

function Home() {
  const { data, loading } = useGetInfosSiteQuery();
  console.log(data);
  

  const [copyKey, setCopyKey] = useState({
    copied: false,
    message: "",
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center grow">
        <Loading />
      </div>
    );
  }

  return (
    <main className="mt-[71px] h-full grow p-none flex flex-col items-center lg:flex-row justify-between max-w-[1300px] mx-auto">
      <img
        className="block object-cover z-0 w-[600px] h-[670px] absolute opacity-20 lg:hidden min:object-contain"
        src={twoDogs}
      />
      <div className="px-6 py-3 flex flex-col items-center w-full max-w-[600px] justify-center m-auto flex-initial gap-8 lg:items-start h-full z-10">
        <h2 className="text-center break-words text-3xl font-semibold lg:4xl lg:text-start">
          {data?.siteInfos[0]?.slogam}
        </h2>
        <div className="flex flex-col gap-2 items-center w-full max-w-[270px]">
          <LogoPix />
          <QrCodeGen
            link={
              data?.siteInfos[0]?.chavePix || "https://www.instagram.com/caopanha/"
            }
            icon={data?.siteInfos[0]?.iconqrcode?.url}
          />
          <span className="text-1xl">Toda e qualquer ajuda será bem vinda</span>
          <span className="bg-white text-sm mt-3 p-1 border text-center rounded border-dashed border-red-700 min:text-base">
            {data?.siteInfos[0]?.chavePix || "https://www.instagram.com/caopanha/"}
          </span>
          <CopyToClipboard
            text={
              data?.siteInfos[0]?.chavePix || "https://www.instagram.com/caopanha/"
            }
            onCopy={() =>
              setCopyKey({
                message: "Chave copiada com sucesso!",
                copied: true,
              })
            }
          >
            <button
              className={`text-sm py-3 px-8 rounded-full bg-red-700 text-white hover:bg-red-600 uppercase transition-all ${
                copyKey.copied && "px-4"
              } min:text-base`}
              disabled={copyKey.copied}
            >
              {copyKey.copied ? (
                <span className="flex gap-1 items-center">
                  <Check size={25} />
                  Copiada
                </span>
              ) : (
                "Copiar chave Pix"
              )}
            </button>
          </CopyToClipboard>
          <Snackbar
            open={copyKey.copied}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            message={copyKey.message}
            autoHideDuration={3500}
            onClose={() => setCopyKey({ message: "", copied: false })}
          />
        </div>
      </div>
      <div className="hidden max-w-[450px] lg:flex">
        <img className="flex-1" src={twoDogs} />
      </div>
    </main>
  );
}

export default Home;

import { Cat, Dog, Info, WhatsappLogo } from "phosphor-react";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PetProp {
  Pet: {
    specie: 'Dog' | 'Cat';
    createdAt: Date;
    namePet: string;
    slug: string;
    summary: string;
    whatsapp: string;
    image: {
      url: string;
    };
  }
}

function PetCard({ Pet }: PetProp) {
  const {  specie, createdAt, namePet, summary, whatsapp, image } = Pet
  const dateFormatted = format(new Date(createdAt), "d' de 'MMMM' de 'yyyy", {
    locale: ptBR,
  })
  
  return (
    <div className="flex flex-col m-2 bg-zinc-800 shadow-gray-900 shadow-md w-full h-full rounded-md p-4 md:w-80 group">
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          { specie === 'Dog' ? <Dog size={25} /> : <Cat size={25} />}
          <span className="text-2xl">{namePet}</span>
        </div>
        <span className="text-zinc-300 text-sm">{dateFormatted}</span>
      </div>
      <div className="flex flex-col items-start pt-2 gap-2 md:flex-col-reverse">
        <div className="h-28 w-full overflow-hidden">
          <img 
            alt={`photo-${namePet}`}
            src={image?.url}
            className="h-40 w-full rounded-md object-cover md:h-28 md:rounded-none group-hover:scale-125 duration-500"
          />
        </div>
        <p className="text-base break-words text-justify">
          {summary}
        </p>
      </div>
      <div className="flex justify-end gap-3 pt-4 md:justify-between">
        <button className="flex items-center bg-orange-700 p-2 rounded-md text-sm hover:bg-orange-600">
          <Info size={25} />
          <span>Informações</span>
        </button>
        <a
          className="flex items-center bg-green-800 p-2 rounded-md text-sm hover:bg-green-700"
          href={`https://api.whatsapp.com/send?phone=55${whatsapp}&text=${encodeURI(`Quero adotar o(a) ${namePet}`)}`}
          target="_blank"
        >
          <WhatsappLogo size={25} />
          <span>Adotar</span>
        </a>
      </div>
    </div>
  )
}

export default PetCard;
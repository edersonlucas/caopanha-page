import Loading from "../../components/Loading";
import PetCard from "../../components/PetCard";
import { useGetPetsQuery } from "../../graphql/generated";
function Pets () {
  const { data, loading } = useGetPetsQuery();

  console.log(data);
  

  if (loading) {
    return (
      <div className="flex items-center justify-center grow">
        <Loading />
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center grow bg-blue-700 text-white mt-[71px]">
      <div className="flex w-full max-w-[1100px] items-center justify-center m-4 flex-wrap mx-auto">
        {data?.pets.map((pet) => <PetCard Pet={ pet } />)}
      </div>
    </main>
  )
}

export default Pets;
import { useParams } from "react-router-dom";


function Pet() {
  const { id } = useParams<{ id: string}>()
  return(
    <div>

    </div>
  )
}

export default Pet;
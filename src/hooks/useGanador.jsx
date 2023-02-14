import { useEffect,useState } from "react"
export default function useGanador({adivinada}){
  const [mostrar,setMostrar] = useState(false)
  const [modal,setModal] = useState(false)
  useEffect(() => {
    if(adivinada.length === 20) {
      setModal(true)
    }
  } ,[adivinada])
  return {mostrar,setMostrar,modal}
}
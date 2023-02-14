import { useEffect,useState } from "react"
export default function useSelected(){
  const [adivinada,setAdivinada] = useState([])
  const [selected,setSelected] = useState([])
    useEffect(() => {
 
        if(selected.length === 2){
         if(selected[0].split("ª")[1] === selected[1].split("ª")[1]){
           setAdivinada((adivinada) => adivinada.concat(selected))
         }
     
         setTimeout(() => setSelected([]),1000)
        }
       },[selected])

       return {adivinada,selected,setSelected,setAdivinada}
}
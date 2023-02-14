import "../App.css"
import Modal from "../components/Modal"
import useGanador from "../hooks/useGanador"
export default function Tablero({setSelected,selected,adivinada,iconos,backgroundImage,setMostrar,setAdivinada}){
 const {modal} = useGanador({adivinada})

 document.body.style = `background-image : url("${backgroundImage}`

  const handleClick = (image) => {
    if(selected[0] === image || selected[1] === image) return
    selected.length < 2 && setSelected((selected) => selected.concat(image))
  }


  return(
  <>
  {
    modal 
    ? <Modal />
    :<>
      <ul style={{backgroundImage : backgroundImage}}>
    {iconos.map((image,index) => {
    const [,url] = image.split("ª")


    return (
        <li index={index} 
            onClick={() => handleClick(image)}
            key={image} 
            style={{cursor : "pointer", padding : 12, borderRadius : 12}}>
            {adivinada.includes(image) || selected.includes(image) 
              ? <img alt="icon" 
                    
                      src={url}  />
              : <img alt="icon" 
                      src="https://icongr.am/clarity/unknown-status.svg?size=128&color=currentColor"  />}
         </li>
      )
    }
    )}
    </ul>
    <button style={{display : "block"}} onClick={() => {
          setMostrar(false)
          setSelected([])
          setAdivinada([])
          document.body.style = `background-image : url("")`
    } }>Volver al inicio</button>
      </>
      }
  </> 
    )
}
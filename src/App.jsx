import {useState } from 'react'
import './App.css'
import Home from './components/Home'
import Tablero from './components/Tablero'
import useGanador from './hooks/useGanador'
import useSelected from './hooks/useSelected'

function App (){
  const {adivinada,selected,setSelected,setAdivinada} =  useSelected()
  const {mostrar,setMostrar} = useGanador({adivinada})
  

  const [iconos,setIconos] = useState(null)
  const [backgroundImage,setBackgroundImage] = useState(null)

  return(
    <>
    {!mostrar 
    ?  <Home setMostrar={setMostrar} 
             setIconos={setIconos} 
             setBackgroundImage={setBackgroundImage}
            
        />
    : <Tablero setSelected={setSelected} 
    selected={selected} 
    adivinada={adivinada} 
    iconos={iconos} 
    backgroundImage={backgroundImage}
    setMostrar={setMostrar}
    setAdivinada={setAdivinada}/> 
     
    }
    </>
  
  )
}
export default App

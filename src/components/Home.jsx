import personajes from "../personajes.json"
import "../App.css"
import backgroundSimpsons from "../assets/fondos/simpsons.jpeg"
import backgroundToyStory from "../assets/fondos/toyStory.jpg"
import backgroundCars from "../assets/fondos/cars.png"
export default function Home({setMostrar,setIconos,setBackgroundImage})
{
  const handleClick = (personaje) => {
    const newArray = personajes[personaje].flatMap((image) => [`aª${image}`, `bª${image}`]).sort(() => Math.random() - 0.5)
    setIconos(newArray)   
    setMostrar(true)

    const newBackground = personaje === "simpsons" ? backgroundSimpsons
    : personaje === "toyStory" ? backgroundToyStory
    : backgroundCars
    
    setBackgroundImage(newBackground)
  }
    return (
           <div className='contenedor'>
              <h1>Memotest!</h1>
              <h3>Elige con que iconos quieres jugar:</h3>
              <button onClick={() => handleClick("simpsons") }>Los Simpsons</button>
              <button onClick={() => handleClick("toyStory")}>Toy Story</button>
              <button onClick={() => handleClick("cars")}>Cars</button> 
           </div>
           )  
}
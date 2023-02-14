import "../App.css"
import Confetti from 'react-confetti'
export default function Modal(){
    document.body.style = `background-image : url()`
    return(
        <>
            <h2>Ganaste!</h2>
            <button style={{display : "block"}} onClick={() => location.reload()}>Volver a jugar</button>    
            <Confetti />
        </>
    )
}
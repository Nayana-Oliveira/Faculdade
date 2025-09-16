import './index.css'
import { Link } from "react-router-dom"

export default function Contato() {

    return (
        <div className='pagina-contato'>
            <Link to='/'>Voltar</Link>
            <h1 className='titulo'>Contato</h1>

            <p>Oie, sou a Contato!</p>
        </div>
    )
}

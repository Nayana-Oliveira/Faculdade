import './index.css';
import { Link } from "react-router-dom";

import Aluno from '../../components/aluno';


export default function Home() {

    return (
        <div className='pagina-home'>
            <h1 className="titulo">Home</h1>

            <p>Oie, sou a Home!</p>
            <p>
                <Link to='/contato'>Ir para Contato</Link>
            </p>

            <Aluno nome="Bruno O." curso="TADS" />
            <Aluno nome="Joao B." curso="BCC" />
            <Aluno nome="Gabriel R." curso="TSI" />
            <Aluno nome="Helen B." curso="TBD" />

        </div>
    )
}
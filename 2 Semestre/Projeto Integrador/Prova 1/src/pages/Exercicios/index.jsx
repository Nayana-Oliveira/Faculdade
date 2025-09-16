import { Link } from 'react-router-dom'
import './index.css'
import Exercicio1 from '../../components/exercicio1'
import Exercicio2 from '../../components/exercicio2'
import Exercicio3 from '../../components/exercicio3' 
import Exercicio4 from '../../components/exercicio4'
import Exercicio5 from '../../components/exercicio5'
import Exercicio6 from '../../components/exercicio6'
import Exercicio7 from '../../components/exercicio7'
import Exercicio8 from '../../components/exercicio8'
import Exercicio9 from '../../components/exercicio9'

export default function Exercicios() {
    return(
        <div className="page-exercicio">
            <h1 className='Titulo'>Exercícios</h1>
            <div className="exercicios">
                <Link to='/'>Home</Link>
            </div>
            <h1>Exercício 1</h1>
            <Exercicio1/>
            <br />
            <h1>Exercício 2</h1>
            <Exercicio2 />
            <br />
            <h1>Exercício 3</h1>
            <Exercicio3 />
            <br />
            <h1>Exercício 4</h1>
            <Exercicio4 />
            <br />
            <h1>Exercício 5</h1>
            <Exercicio5 />
            <br />
            <h1>Exercício 6</h1>
            <Exercicio6 />
            <br />
            <h1>Exercício 7</h1>
            <Exercicio7 />
            <br />
            <h1>Exercício 8</h1>
            <Exercicio8 />
            <br />
            <h1>Exercício 9</h1>
            <Exercicio9 />
            <br />
        </div>
    )
}
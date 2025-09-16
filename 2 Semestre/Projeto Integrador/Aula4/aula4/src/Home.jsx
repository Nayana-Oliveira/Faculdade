import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1> Bem vindo(a) ao ReactJS!</h1>
            <h2> Aula 04 - BOraaa!!</h2>

            <h2>Ir para</h2>
            <ul>
                <li>
                    <Link to='/sobremim'>Sobre Mim</Link>
                </li>
                <li>
                    <Link to='/hobby'>Hobby</Link>
                </li>
            </ul>
        </div>
    )
}
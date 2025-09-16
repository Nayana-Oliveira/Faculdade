import { Link } from 'react-router-dom'
import './index.css'

export default function Home() {
    return(
        <div className="home">
            <h1>Home</h1>
            <p className='button'>
                <Link to='/exercicios'>Exercicios</Link>
            </p>
        </div>
    )
}
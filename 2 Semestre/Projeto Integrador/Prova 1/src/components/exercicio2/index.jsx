import { useState } from "react";
import './index.css'

export default function Exercicio2() {
    const [quantidade, setQuantidade] = useState('');
    const [meia, setMeia] = useState(false); 
    const [total, setTotal] = useState('');
    const ingresso = 24;

    function alteraQuantidade(e) {
        setQuantidade(e.target.value);
    }

    function alteraMeia(e) {
        setMeia(e.target.checked);
    }

    function calcular() {
        const valor = Number(quantidade) * (meia ? ingresso / 2 : ingresso);
        setTotal(valor);
    }

    return(
        <div className="exercicio2-container"> 
            <h2>Tickets Cinemark</h2>
            <input type="text" size={32} placeholder='Quantidade de ingressos' value={quantidade} onChange={alteraQuantidade} />
            <br />
            <input type="checkbox" value={meia} onChange={alteraMeia}/>Meia entrada
            <br />
            <br />
            <button onClick={calcular}>Calcular</button>

            <h3>Total: {total}</h3>
        </div>
    )
}
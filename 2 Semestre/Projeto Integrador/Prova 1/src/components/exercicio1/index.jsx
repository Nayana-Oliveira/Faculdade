import { useState } from "react";
import './index.css'

export default function Exercicio1() {
  const [inteira, setInteira] = useState('');
  const [meia, setMeia] = useState('');
  const [total, setTotal] = useState(0);
  const preco = 24; 

  function calcular() {
    const valorTotal = (Number(inteira) * preco) + (Number(meia) * (preco / 2));
    setTotal(valorTotal);
  }

  return (
  <div className="exercicio1-container">
    <h1>Tickets Cinemark</h1>

    <input type="number" placeholder="Quantidade de ingressos inteira" value={inteira} onChange={(e) => setInteira(e.target.value)} />
    <input type="number" placeholder="Quantidade de ingressos meia" value={meia} onChange={(e) => setMeia(e.target.value)} />
    <button onClick={calcular}>Calcular</button>

  <p>Total: R$ {total.toFixed(2)}</p>
</div>

  )
}

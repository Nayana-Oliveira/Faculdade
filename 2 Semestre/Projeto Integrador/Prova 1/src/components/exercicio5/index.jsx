import React, { useState } from "react";
import "./index.css"; 

export default function Exercicio5() {
  const [valorReal, setValorReal] = useState("");
  const [resultado, setResultado] = useState("");
  const [contador, setContador] = useState(0);

  const valorDolar = 5.24; 

  function somar(a, b) {
    let total = a;
    for (let i = 0; i < b; i = i + 1) {
      total = total + 1;
    }
    return total;
  }
  
  function calcular() {
    const real = Number(valorReal) || 0;
    const convertido = real / valorDolar; 
    
    setResultado(convertido);
    
    setContador(somar(contador, 1));
  }

  return (
    <div className="exercicio5-container">
      <h1>Câmbio de Dólar</h1>
      <p>Converta o valor do Real em Dólar.</p>

      <input
        type="number"
        placeholder="Informe o valor em Real"
        value={valorReal}
        onChange={(e) => setValorReal(e.target.value)}
      />

      <p>Valor do Dólar: R$ {valorDolar}</p>

      <button onClick={calcular}>Calcular</button>

      <p className="resultado">Conversão: $ {resultado}</p>
    </div>
  );
}
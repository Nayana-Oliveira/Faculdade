import React, { useState } from "react";
import "./index.css";

function gerarTabuada(numero) {

  const tabuadaCompleta = new Array(11);

  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    const linha = numero + " x " + i + " = " + resultado;

    tabuadaCompleta[i] = linha;
  }

  return tabuadaCompleta;
}

export default function Exercicio8() {
  const [numero, setNumero] = useState("");
  const [linhasDaTabuada, setLinhasDaTabuada] = useState([]);

  const calcularTabuada = () => {
    const numeroParaCalcular = parseInt(numero);

    if (!isNaN(numeroParaCalcular)) {
      const novaTabuada = gerarTabuada(numeroParaCalcular);
      setLinhasDaTabuada(novaTabuada);
    } else {
      alert("Por favor, digite um número válido.");
      setLinhasDaTabuada([]);
    }
  };

  return (
    <div className="exercicio8-container">
      <h2>Tabuada</h2>

      <div>
        <input
          type="number"
          placeholder="Informe um número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button onClick={calcularTabuada}>OK</button>
      </div>

      <div>
        {linhasDaTabuada.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from "react";
import "./index.css"; 

export default function Exercicio6() {
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [corResultante, setCorResultante] = useState("-");

  const mapaDeCombinacoes = {
    vermelho: {
      azul: "roxo",
      amarelo: "laranja",
      vermelho: "vermelho",
    },
    azul: {
      vermelho: "roxo",
      amarelo: "verde",
      azul: "azul",
    },
    amarelo: {
      vermelho: "laranja",
      azul: "verde",
      amarelo: "amarelo",
    }
  };

  const combinarCores = () => {
    const combinacoesParaCor1 = mapaDeCombinacoes[cor1];

    if (combinacoesParaCor1) {
      const resultadoFinal = combinacoesParaCor1[cor2];

      if (resultadoFinal) {
        setCorResultante(resultadoFinal);
      } else {
        setCorResultante("Combinação Inválida");
      }
    } else {
      setCorResultante("Combinação Inválida");
    }
  };

  return (
    <div className="exercicio6-container">
      <h2>Combinador de Cores Primárias</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Cor primária"
          value={cor1}
          onChange={(e) => setCor1(e.target.value)}
        />
        <span>combinado com</span>
        <input
          type="text"
          placeholder="Cor primária"
          value={cor2}
          onChange={(e) => setCor2(e.target.value)}
        />
        <button onClick={combinarCores}>OK</button>
      </div>

      <p className="resultado">
        Cor resultante: <strong>{corResultante}</strong>
      </p>
    </div>
  );
}
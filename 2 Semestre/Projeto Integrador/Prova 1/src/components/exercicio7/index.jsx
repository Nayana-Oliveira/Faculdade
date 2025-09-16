import React, { useState } from "react";
import "./index.css";

const consumoCarneKg = 0.3;
const consumoLinguicaKg = 0.2;
const consumoFrangoKg = 0.15;

const precoCarneKg = 50.0;
const precoLinguicaKg = 28.0;
const precoFrangoKg = 22.0;

export default function Exercicio7() {
  const [pessoas, setPessoas] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularChurrasco = () => {
    const numPessoas = parseInt(pessoas) || 0;

    if (numPessoas > 0) {
      const qtdCarne = numPessoas * consumoCarneKg;
      const qtdLinguica = numPessoas * consumoLinguicaKg;
      const qtdFrango = numPessoas * consumoFrangoKg;

      const custoCarne = qtdCarne * precoCarneKg;
      const custoLinguica = qtdLinguica * precoLinguicaKg;
      const custoFrango = qtdFrango * precoFrangoKg;

      const custoTotal = custoCarne + custoLinguica + custoFrango;
      const porPessoa = custoTotal / numPessoas;

      setResultado({
        quantidades: { carne: qtdCarne, linguica: qtdLinguica, frango: qtdFrango },
        custos: { carne: custoCarne, linguica: custoLinguica, frango: custoFrango },
        rateio: { total: custoTotal, porPessoa: porPessoa },
      });
    } else {
      setResultado(null);
      alert("Por favor, informe um número de pessoas válido.");
    }
  };

  const ConteudoResultado = () => (
    <div className="resultado-container">
      <div className="resultado-bloco">
        <h3 className="azul">Quantidades</h3>
        <p>Carne: <span>{resultado.quantidades.carne.toFixed(1)} kg</span></p>
        <p>Linguiça: <span>{resultado.quantidades.linguica.toFixed(1)} kg</span></p>
        <p>Frango: <span>{resultado.quantidades.frango.toFixed(1)} kg</span></p>
      </div>
      <div className="resultado-bloco">
        <h3 className="azul">Custo</h3>
        <p>Carne: <span>R$ {resultado.custos.carne.toFixed(2)}</span></p>
        <p>Linguiça: <span>R$ {resultado.custos.linguica.toFixed(2)}</span></p>
        <p>Frango: <span>R$ {resultado.custos.frango.toFixed(2)}</span></p>
      </div>
      <div className="resultado-bloco">
        <h3 className="azul">Rateio</h3>
        <p>Custo Total: <span>R$ {resultado.rateio.total.toFixed(2)}</span></p>
        <p>Custo por Pessoa: <span>R$ {resultado.rateio.porPessoa.toFixed(2)}</span></p>
      </div>
    </div>
  );

  return (
    <div className="exercicio7-container">
      <h2>Churrasco de Domingo</h2>
      <div>
        <input
          type="number"
          placeholder="Informe a qtd de Pessoas"
          value={pessoas}
          onChange={(e) => setPessoas(e.target.value)}
        />
        <button onClick={calcularChurrasco}>Calcular</button>
      </div>
      {resultado && <ConteudoResultado />}
    </div>
  );
}
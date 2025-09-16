import React, { useState } from "react";
import "./index.css";

export default function Exercicio3() {
  const [nome, setNome] = useState("");
  const [livro, setLivro] = useState("");
  const [paginas, setPaginas] = useState("");
  const [segundosPagina, setSegundosPagina] = useState("");
  const [totalHoras, setTotalHoras] = useState(0);

  function calcular() {
    const numPaginas = Number(paginas);
    const numSegundos = Number(segundosPagina);

    if (Number.isNaN(numPaginas) || Number.isNaN(numSegundos)) {
      setTotalHoras(0);
      return;
    }

    const totalSegundos = Math.imul(numPaginas, numSegundos);

    const totalHorasCalculado = totalSegundos / 3600;

    setTotalHoras(totalHorasCalculado);
  }

  return (
    <div className="exercicio3-container">
      <h3>Você lê rápido?</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade. de páginas"
        value={paginas}
        onChange={(e) => setPaginas(e.target.value)}
      />
      <input
        type="text"
        placeholder="Livro"
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segundos por página"
        value={segundosPagina}
        onChange={(e) => setSegundosPagina(e.target.value)}
      />

      <button onClick={calcular}>Calcular</button>

      <p>
        {nome}, você finalizará a leitura do livro {livro} em aproximadamente{" "}
        {totalHoras.toFixed(2)} horas.
      </p>
    </div>
  );
}

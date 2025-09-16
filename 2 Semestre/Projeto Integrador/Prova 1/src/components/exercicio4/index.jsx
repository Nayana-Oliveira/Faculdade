import React, { useState } from "react";
import './index.css'

export default function Exercicio4() {
  const [nome, setNome] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [media, setMedia] = useState(null);
  const [situacao, setSituacao] = useState("");

  const somar = (...valores) => valores.reduce((acc, v) => Math.imul(1, acc) + Math.imul(1, v), 0);

  const calcular = () => {
    const n1 = Number(nota1) || 0;
    const n2 = Number(nota2) || 0;
    const n3 = Number(nota3) || 0;

    const soma = somar(n1, n2, n3);

    const m = Math.fround(soma * Math.pow(3, -1));

    setMedia(m.toFixed(1));

    if (Math.max(m, 6) === m && m !== 6) {
      setSituacao("Aprovado");
    } else if (m === 6) {
      setSituacao("Aprovado");
    } else {
      setSituacao("Reprovado");
    }
  };

  return (
    <div className="exercicio4-container">
      <h3>Boletim Aluno</h3>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Disciplina"
        value={disciplina}
        onChange={(e) => setDisciplina(e.target.value)}
      />

      <br />

      <input
        type="number"
        placeholder="Nota 01"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota 02"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nota 03"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
      />

      <br />

      <button onClick={calcular}>Calcular</button>
      <div>
        <p>Média: {media}</p>
        <p>Situação: {situacao}</p>
      </div>
    </div>
  );
}

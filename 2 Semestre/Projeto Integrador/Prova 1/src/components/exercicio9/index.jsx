import React, { useState } from "react";
import "./index.css";

export default function Exercicio9() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([
    "Estudar ReactJS",
    "Dormir a tarde toda",
    "Procurar emprego de 10k mês",
    "Treinar pra ficar no shape",
  ]);

  function adicionarTarefa() {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  }

  function removerTarefa(indice) {

    const tarefasAtualizadas = [...tarefas];

    tarefasAtualizadas.splice(indice, 1);
    setTarefas(tarefasAtualizadas);
  }

  return (
    <div className="exercicio9-container">
      <h2>Lista de Tarefas</h2>

      <div>
        <input
          type="text"
          placeholder="Descreva a Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <pre>{tarefa}</pre>
            <button className="excluir" onClick={() => removerTarefa(index)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
import "./App.css";
import FormTask from "./Components/FormTask/FormTask";
import InputTask from "./Components/InputTask/InputTask";
import React, { useState } from "react";

function App() {
  const [valor, setValor] = useState('');
  const [arrayTask, setArrayTask] = useState([]);

  return (
    <div className="App">
      <InputTask setValor={setValor} valor={valor}>
        Nova tarefa
      </InputTask>
      <div className="DivBotao">
        <button
          className="Botao"
          type="submit"
          onClick={() => {
            if (valor.trim() !== "") {
              setArrayTask([...arrayTask, valor]);
              setValor("");
            }
          }}
        >
          Adicionar
        </button>
      </div>
      <FormTask arrayTask={arrayTask} setArrayTask={setArrayTask} />
    </div>
  );
}

export default App;

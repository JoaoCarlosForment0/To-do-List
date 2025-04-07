import React from "react";
import "./style.css";

const FormTask = ({ arrayTask, setArrayTask }) => {
  return (
    <div className="TaskFormDiv">
      <form className="TaskForm">
        {arrayTask.map((element, index) => {
          return (
            <div key={index} className="ButtonsDiv">
              <button className="buttonTask">{element}</button>
              <div className="divCheckbox">
                <input
                  className="checkbox"
                  type="checkbox"
                  id={index + element}
                />
              </div>
              <button
                className="buttonTrash"
                type="button"
                onClick={() => {
                  setArrayTask(
                    arrayTask.filter((_, i) => i !== index),
                    console.log(index)
                  );
                }}
              >
                remover
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FormTask;

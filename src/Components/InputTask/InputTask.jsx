import React from "react";
import "./style.css";

const InputTask = ({ setValor, children, valor }) => {
  const handleChange = (event) => {
    setValor(event.target.value);
  };
  return (
    <div className="InputTaskDiv">
      <input
        className="InputTask"
        type="text"
        name="InputTask"
        id="InputTask"
        required
        value={valor}
        onChange={handleChange}
        placeholder={children}
      />
    </div>
  );
};

export default InputTask;

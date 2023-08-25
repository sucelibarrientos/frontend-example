//en la importacion tambien podes usar destructuring {useState}
import { useState } from "react";
import ButtonCalculator from "./components/ButtonCalculator";
import "./calculadora.css";

function App() {
  const [calculador, setCalculador] = useState(0);
  const addValor = (e) => {
    //console.log("numero");
    //console.log(e.target.value);
    if (calculador == 0) {
      setCalculador(e.target.value);
    } else {
      setCalculador(calculador + e.target.value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const reset = () => {
    setCalculador(0);
  };
  const deleteValor = () => {
    if (calculador.length == 1) {
      setCalculador(0);
    } else {
      setCalculador(calculador.slice(0, -1));
    }
  };
  const revisarSiExisteOperador = (valor) => {
    //si existe un operador devuelve true
    //si no existe un operador devuelve false
    if (valor.includes("+")) {
      return true;
    }
    if (valor.includes("-")) {
      return true;
    }
    if (valor.includes("/")) {
      return true;
    }
    if (valor.includes("*")) {
      return true;
    }
    return false;
  };
  const addOperador = (e) => {
    //errores:
    //no se puede poner un operador al principio
    //no se puede poner un operador si ya hay uno
    //no se puede poner un operador si el ultimo es un operador
    if (calculador != 0) {
      const revision = revisarSiExisteOperador(calculador);
      if (revision == false) {
        setCalculador(calculador + e.target.value);
      }
    }
  };
  const igual = () => {
    setCalculador(String(eval(calculador)));
  };
  return (
    <div className="contenerdor-principal">
      <form onSubmit={onSubmit} className="calculadora">
        <h3>{calculador}</h3>
        <br />
        <ButtonCalculator action={addValor} value={1} text="1"/>
        <ButtonCalculator action={addValor} value={2} text="2"/>
        <ButtonCalculator action={addValor} value={3} text="4"/>
        <ButtonCalculator action={addOperador} value="+" text="+"/>
        <br />
        <ButtonCalculator action={addValor} value={4} text="4"/>
        <ButtonCalculator action={addValor} value={5} text="5"/>
        <ButtonCalculator action={addValor} value={6} text="6"/>
        <ButtonCalculator action={addOperador} value="-" text="-"/>
        <br />
        <ButtonCalculator action={addValor} value={7} text="7"/>
        <ButtonCalculator action={addValor} value={8} text="8"/>
        <ButtonCalculator action={addValor} value={9} text="9"/>
        <ButtonCalculator action={addOperador} value="*" text="x"/>
        <br />
        <ButtonCalculator action={addValor} value={0} text="0"/>
        <ButtonCalculator action={addOperador} value="/" text="/"/>
        <ButtonCalculator action={reset} text="C"/>
        <ButtonCalculator action={igual} text="="/>
        <br />
        <button className="calculadora-button2" onClick={deleteValor}>{"<="}</button>
      </form>
    </div>
  );
}

export default App;
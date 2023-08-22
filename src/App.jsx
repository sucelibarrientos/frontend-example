import { useState } from "react";
//importacion de componentes
import Contador from "./components/Contador";
import Boton from "./components/Boton";

function App() {
  //logica del componente
  let total = 100;
  //numero accede al estado
  //setNumero modifica el estado
  const [numero, setNumero] = useState(100);
  const sumar = () => {
    console.log("sumar");
    total = total + 1; //es instanteaneo
    setNumero(numero + 1); //es asincrono
    console.log("total:", total);
    console.log("numero:", numero);
  };
  function restar() {
    console.log("restar");
    total = total - 1;
    setNumero(numero - 1);
    console.log("total:", total);
    console.log("numero:", numero);
  }
  return (
    <div>
      <Contador total={total} numero={numero} />
      {/* <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button> */}
      <Boton
        texto="Sumar 1"
        numeroDeOperacion={1}
        setNumero={setNumero}
        numero={numero}
      />
      <Boton
        texto="Sumar 10"
        numeroDeOperacion={10}
        setNumero={setNumero}
        numero={numero}
      />
      <Boton
        texto="Restar 1"
        numeroDeOperacion={-1}
        setNumero={setNumero}
        numero={numero}
      />
      <Boton
        texto="Restar 10"
        numeroDeOperacion={-10}
        setNumero={setNumero}
        numero={numero}
      />
    </div>
  );
}

export default App;

//como se crea un componente en react
function Contador(props) {
  //creamos al funcion
  //retornamos un html
  return (
    <div>
      {/* <h1>variable total: {props.total}</h1> */}
      <h1>estado numero: {props.numero}</h1>
    </div>
  );
}
//exportamos el componente
export default Contador;

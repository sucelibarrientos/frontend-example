function Boton(props) {
  const { numero, setNumero } = props; //destructuring
  const operacion = () => {
    //console.log(props.numeroDeOperacion);
    setNumero(numero + props.numeroDeOperacion);
  };
  return <button onClick={operacion}>{props.texto}</button>;
}
export default Boton;

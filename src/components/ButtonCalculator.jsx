function ButtonCalculator(props) {
  const { action, value, text } = props; //destructuring
  return (
    <button className="calculadora-button1" onClick={action} value={value}>
      {text}
    </button>
  );
}
export default ButtonCalculator;

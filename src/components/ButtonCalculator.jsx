function ButtonCalculator(props) {
  const { action, value, text } = props; //destructuring
  return (
    <button onClick={action} value={value}>
      {text}
    </button>
  );
}
export default ButtonCalculator;

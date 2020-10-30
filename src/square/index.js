function Square(props) {
  //   const [state, setstate] = useState(null);

  //   function changeState() {
  //     console.log("working");
  //     setstate("X");
  //   }
  const { index, onHandle, text } = props;

  return (
    <button
      onClick={() => {
        onHandle(index);
      }}
    >
      {text}
    </button>
  );
}

export default Square;

// SQUARE:
// state: state (null, X, O)        this will be based on players
// behaviour: changing the state based on the player and the square
// props: index

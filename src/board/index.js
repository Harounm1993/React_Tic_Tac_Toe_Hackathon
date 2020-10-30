import React, { useState } from "react";

import Square from "../square";

function Board() {
  const [grid, setgrid] = useState(Array(9).fill(null));
  console.log(grid);

  function handleClick(index) {
    setgrid([...grid.slice(0, index), "X", ...grid.slice(index + 1)]);
  }

  return (
    <div>
      {grid.map((grid, index) => (
        <Square index={index} onHandle={handleClick} text={grid} />
      ))}
    </div>
  );
}
export default Board;

// BOARD:
// state: Array
// behaviour: map a button for each in the array.
// Player is next

import React, { useState } from "react";

import Square from "../square";

function Board() {
  const [grid, setgrid] = useState(Array(9).fill(null));
  const [isNext, setisNext] = useState(true);

  function handleClick(index) {
    if (calculateWinner(grid) || grid[index]) {
      return;
    }
    setgrid([
      ...grid.slice(0, index),
      isNext ? "X" : "O",
      ...grid.slice(index + 1),
    ]);
    setisNext(!isNext);
  }

  function calculateWinner(grid) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  }

  return (
    <div>
      <h1> Next player: {isNext ? "X" : "O"} </h1>
      <div class="board-container">
        {grid.map((grid, index) => (
          <Square
            key={index}
            index={index}
            onHandle={handleClick}
            text={grid}
          />
        ))}
      </div>
      <h2> Winner is {calculateWinner(grid)}</h2>
    </div>
  );
}

export default Board;

// BOARD:
// state: Array
// behaviour: map a button for each in the array.
// Player is next

import React, { useState } from "react";

import Square from "../square";

function Board() {
  const [grid, setgrid] = useState(Array(9).fill(null));
  const [isNext,setisNext] = useState(true)
  console.log(grid);

  function handleClick(index) {
    setgrid([...grid.slice(0, index), isNext ? 'X' : 'O', ...grid.slice(index + 1)]);
    setisNext(!isNext )
    if (calculateWinner(grid) || grid[index] ){
      return
    } 
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
        console.log("working")
        return grid[a];
      }
    }
    return null;
  }  

   function render() {
    const winner = calculateWinner(grid);
    
    if (winner) {
       return  'Winner: ' + winner;
    } else {
      return 'Next player: ' + (isNext ? 'X' : 'O');
    }
  
  return (
     
    <div>
      <h1>  Next player: {isNext ? 'X' : 'O'} </h1>
      <h2>{render()}</h2>
      {grid.map((grid, index) => (
        <Square index={index} onHandle={handleClick} text={grid} />
      ))}
    </div>
  );
}
}
export default Board;

// BOARD:
// state: Array
// behaviour: map a button for each in the array.
// Player is next

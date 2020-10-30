import React, {useState} from "react"

import Square from "../square"

function Board (){
const [grid, setgrid] = useState([null,null, null, null, null,null, null, null, null])

return (
//Array(9).fill(null)

   { grid.map(()=> <Square index = {index} /> )}



)

}
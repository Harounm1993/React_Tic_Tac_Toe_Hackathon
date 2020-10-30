import React, {useState} from 'react'

function Square({index}){
const [state, setstate] = useState("null")

function changeState(){
    setState("x")
}
return <button onClick = {() => alert("click")} > {state}</button>

}

export default Square
import { useState } from "react"

export default function LudoBoard(){
    const [moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});
    function Bl(){
        moves.blue = moves.blue+1;
        setMoves({...moves})
    }
    function Yl(){
        moves.yellow = moves.yellow+1;
        setMoves({...moves})
    }
    function Gl(){
        moves.green = moves.green+1;
        setMoves({...moves})
    }
    function Rl(){
        moves.red = moves.red+1;
        setMoves({...moves})
    }
    return <div>
        <p>Game Begins</p>
        <div className="board">
            <p>Blue Moves= {moves.blue}</p>
            <button onClick={Bl} style={{backgroundColor:"blue"}}>+1</button>
            <p>Yellow Moves={moves.yellow} </p>
            <button onClick={Yl} style={{backgroundColor:"yellow"}}>+1</button>
            <p >Green Moves={moves.green} </p>
            <button onClick={Gl} style={{backgroundColor:"green"}}>+1</button>
            <p>Red Moves= {moves.red}</p>
            <button onClick={Rl} style={{backgroundColor:"red"}}>+1</button>
        </div>
    </div>
}
import React from "react";
function Button(){
        const [count,setCount]=React.useState(0)
        function Increment(){
            setCount(count=>count+1);
        }
        function Decreament(){
            setCount(count=>count-1)
        }
    return (
        <>
        <p>{count}</p>
        <button onClick={Increment}>Increament</button>
        <button onClick={Decreament}>Decreament</button>

        </>
    );
}
export default Button;
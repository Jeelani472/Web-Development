import { useState, useEffect } from "react";

export default function Counter() {
    let [countX, SetCountX] = useState(0);
    let [countY, SetCountY] = useState(0);

    let incCountX = () => {
        SetCountX((currCount) => currCount + 1);
    }

    let incCountY = () => {
        SetCountY((currCount) => currCount + 1);
    }
    useEffect(function sideEffect() {
        console.log("useEffect is executed");
    }, [])

    return (
        <div>
            <h3>CountX={countX}</h3>
            <button onClick={incCountX}>+1</button>J
            <h3>CountY={countY}</h3>
            <button onClick={incCountY}>+1</button>
        </div>

    )
}

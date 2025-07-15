import { useState } from "react";

function SimpleState(){
    const state = useState(0);
    let clicked = 0;

    const handleClick = () => {
        const increment = () => {
            console.log (state)
    };
    return (
        <div>
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
            <h3>Clicked{clicked}</h3>
            </div>)
}
}
    
export default SimpleState;
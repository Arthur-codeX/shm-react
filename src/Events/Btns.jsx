function  Buttons (){
    const PrintDate = () => {
     let date = new Date();
     console.log(date)
    }

    const Clicked = () => {}
        console.log("Button clicked");
    
    const AlertDate = () => {
        let date = new Date();
        console.log(date);
        alert(date);
    }
    function mouseIn() {
        console.log("Mouse is in");

    return(
        <div>
            <p>
                <button onMouseEnter ={mouseIn}
                onClick={clicked}>CLick Me</button>
            </p>
            <p>
                <button onClick={PrintDate}

                >Print Date</button>
            </p>
            <p>
                <button onClick={AlertDate}>
                    Alert Date
                </button>
            </p>
        </div>
    )
    }}
export default Buttons;
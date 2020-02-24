import React from "react";

function ButtonTest() {
     function mouseEnterEvent() {
         console.log('Najechano na przycisk')
     }
     return(
         <button onMouseEnter={mouseEnterEvent}>Click</button>
     )
}

function Task08() {
    return <ButtonTest/>
}

export default Task08;
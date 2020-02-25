import React, {Component} from "react";

class PassParameter extends Component{

    handleClickButton = (event,text) => {
        event.preventDefault();
        console.log(text);
    };

    render() {
        return <a href='http://google.com' onClick={e => this.handleClickButton("hello", e)}>Klik</a>
    }
}

function Task17() {
    return(
        <PassParameter/>
    )
}

export default Task17;
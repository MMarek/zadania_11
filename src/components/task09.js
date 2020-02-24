import React, {Component} from "react";

class Div extends Component{
    onClick(e) {
        e.preventDefault();
        console.log("klik");
    }

    onMouseEnter(e) {
        e.preventDefault();
        console.log("najazd");
    }

    onMouseLeave(e) {
        e.preventDefault()
        console.log("zjazd");
    }

    render() {
        return (
            <button onClick={this.onClick} onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}>Najedź</button>
        );
    }
}

function Task09() {
    return <Div/>
}

export default Task09;
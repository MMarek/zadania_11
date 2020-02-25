import React, {Component} from "react";

class NumberRandomInfo extends Component{
    state = {
        number: Math.ceil(Math.random() * 5)
    };

    render() {
        return (
            <div>
                <h1>{this.state.number}</h1>
                <h2>{this.state.number > 3 ? "Większa od 3" : "Mniejsza od 3"}</h2>
            </div>
        );
    }
}

function Task20() {
    return <NumberRandomInfo/>
}

export default Task20;
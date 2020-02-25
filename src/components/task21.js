import React, {Component} from "react";

class ButtonCounter extends Component {
    state = {
        counter: 0
    };

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
            </>
        )
    }
}

class ButtonToClick extends Component {

    handleClick = () => {

        }
    };

    render() {
        return <button onClick={this.handleClick}>Click me!</button>
    }
}


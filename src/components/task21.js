import React, {Component} from "react";

class ButtonCounter extends Component {
    state = {
        counter: 0
    };

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter +1
        })
    };

    render() {
        return (
            <>
            <h1>{this.state.counter}</h1>
            <ButtonToClick counterEvent={this.increaseCounter}/>
            <ButtonToClick counterEvent={this.increaseCounter}/>
            <ButtonToClick counterEvent={"Hello"}/>
            </>
        )
    }
}

class ButtonToClick extends Component{

    handleClick = () => {
        if (typeof this.props.counterEvent === 'function'){
            this.props.counterEvent();
        }
    };

    render() {
        return <button onClick={this.handleClick}>Click me!</button>
    }
}

function Task21() {
    return <ButtonCounter/>
}

export default Task21;
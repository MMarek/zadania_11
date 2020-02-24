import React, {Component} from "react";

class SpeedClickGame extends Component{
    state = {
        time: this.props.time,
        points: 0,
        disabled: false
    };

    componentDidMount() {
        this.interval = setInterval(this.calcuatedTime, 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>Czas: {this.state.time}</h1>
            <button onClick={this.handleClick} disabled={this.state.disabled}>Click Me!</button>
            </div>
        )
    }
}

function Task14() {
    return <SpeedClickGame time={2000}/>
}

export default Task14;
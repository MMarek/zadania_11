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

    calcuatedTime = () => {
        this.setState(
            previousTime => ({
                time: previousTime.time - 50
            }),
            () => {
                if (this.state.time === 0) {
                    this.setState({
                        disabled: true
                    });
               clearInterval(this.interval);
                }
            })
    };

    handleClick = () => {
        this.setState(
            previousPoints => ({
                points: previousPoints.points + 1,
                time: this.props.time - (previousPoints.points + 1) * 50
            }));
    };

    render() {
        return (
            <div>
                <h1>Czas: {this.state.time}</h1>
                <h2>Punkty: {this.state.points}</h2>
            <button onClick={this.handleClick} disabled={this.state.disabled}>Click Me!</button>
            </div>
        )
    }
}

function Task14() {
    return <SpeedClickGame time={2000}/>
}

export default Task14;
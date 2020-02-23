import React, {Component} from "react";

class Clock extends Component{

    state = {
        date: new Date()
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                date: new Date()
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <>
             <ClockDate date={this.state.date}/>
             <ClockTime date={this.state.date}/>
            </>
        );
    }
}

function ClockTime(props) {
    const {date} = props;
    return <h1>{date.toLocaleString()}</h1>
}

function ClockDate(props) {
    const {date} = props;
return <h1>{date.toLocaleString()}</h1>
}

function Task06() {
    return <Clock/>
}

export default Task06;
import React, {Component} from "react";

class Clock extends Component{

    state = {
        date: new Date()
    };

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
    // return <h1>{date.toLocaleString()}</h1>
    return <h1>
        <ClockTimeHour date={date}/>
        <ClockTimeMinute date={date}/>
        <ClockTimeSecond date={date}/>
    </h1>
}

function ClockTimeHour(props) {
    const {date} = props;
// return <h1>{date.toLocaleString()}</h1>
return <span>{date.getHours()}</span>
}

function ClockTimeMinute(props) {
    const {date} = props;
    return <span>{date.getMinutes()}</span>
}

function ClockTimeSecond(props) {
    const {date} = props;
    return <span>{date.getSeconds()}</span>
}

function ClockDate(props) {
    const {date} = props;
    return <h1>
        <ClockDateYear date={date}/>
        <ClockDateMonth date={date}/>
        <ClockDateDay date={date}/>
    </h1>
}

function ClockDateYear(props) {
    const {date} = props;
    return <span>{date.getFullYear()}</span>
}

function ClockDateMonth(props) {
    const {date} = props;
    return <span>{date.getMonth() + 1}</span>
}

function ClockDateDay(props) {
    const {date} = props;
    return <span>{date.getDate()}</span>
}

function Task06() {
    return <Clock/>
}

export default Task06;
import React, {Component} from "react";

class HelloWorld extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'Tekst który zniknie po pięciu sekundach'
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                text: 'Tekst który pojawił się po pięciu sekundach'
            })
        }, 5000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return <h1>{this.state.text}</h1>
    }
}

function Task02() {
    return <HelloWorld/>
}

export default Task02;

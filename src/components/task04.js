import React, {Component} from "react";

class Modal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.heading,
            modalOpen: false
        }
    }

    componentDidMount() {
        this.timer = this.setState(() => {
            this.setState({
                modalOpen: true
            })
        }, 10000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        if (!this.state.modalOpen) return null;
        return <h1>{this.state.text}</h1>
    }
}

function Task04() {
    return (
        <div>
            <h1>Test okna modalnego</h1>
            <Modal heading='Zapisz się do newslettera'/>
        </div>
    )
}

export default Task04;
import React, {Component} from "react";

class Modal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            heading: null
        };
        console.log(this.state.modalOpen);
        console.log(this.state.heading);
    }

    componentDidMount() {
        this.timer = this.setState(() => {
            this.setState({
                modalOpen: true,
                heading: "Zapisz się do ...",
            },() => {
                console.log(this.state.modalOpen);
                console.log(this.state.heading);
            });
        }); //add time
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        return (
        <div>
            <h1>Test okna modalnego</h1>
            <h2>{this.state.heading}</h2>
        </div>
        )
    }
}

function Task04() {
    return <Modal/>
}


export default Task04;
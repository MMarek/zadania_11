import React, {Component} from "react";

class Box extends Component{
    state = {
        backgroundColor: 'green',
        height: '200px',
        width: '500px'
    };

    handleMouseEnterEvent = () => {
        this.setState({
            backgroundColor: 'blue',
            height: '400px'
        })
    };

    handleMouseLeaveEvent = () => {
        this.setState({
            backgroundColor: 'green',
            height: '200px'
        })
    };

    render() {
        return (
            <div
                onMouseEnter={this.handleMouseEnterEvent}
                onMouseLeave={this.handleMouseLeaveEvent}
                style={this.state}>
            </div>
        );
    }
}


function Task12() {
    return <Box/>
}

export default Task12;
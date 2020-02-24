import React, {Component} from "react";

class CrazyDiv extends Component {

    state = {
        on: true
    };

    handleMouseOn = () => {
        this.setState({on: true});
        console.log('najazd');
    };

    handleMouseOff = () => {
        this.setState({on: false});
        console.log('zjazd');
    };

    render() {
        const {on} = this.state;
        let random = Math.floor(Math.random() * (500 - 0)) + 0;

        let style = {
            backgroundColor: 'red',
            width: '100px',
            height: '100px',
            position: 'absolute',
            right: on ? `${random}px` : `${random}px`,
            top: on ? `${random}px` : `${random}px`,
            transition: '2s'
        };

        let style1 = {
            width: '50px',
            height: '50px',
            backgroundColor: 'yellow',
        };

        return (
            <div style={style}
                 onMouseEnter={this.handleMouseOn}
                 onMouseLeave={this.handleMouseOff}>
                <button style={style1}>Obiekt</button>
            </div>
        )
    }
}

function Task13() {
    return <CrazyDiv/>
}

export default Task13;
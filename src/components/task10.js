import React, {Component} from "react";
import {render} from "@testing-library/react";

class Bulb extends Component{
    state = {
        on: false
    };

    handleBulbOnOff = () => {
        this.setState({
            on: this.state.on ? false : true
        });
    }
}

render(){
    const {on} = this.state;
    let bulbStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: on ? 'yellow' : 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={style}>
            <button{on ? 'off' : 'on'}></button>
        </div>
    )
}

function Task10() {
    return <Bulb/>
}

export default Task10;
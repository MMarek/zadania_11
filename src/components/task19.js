import React, {Component} from "react";

class CheckBox extends Component{
    state = {
        checked: false
    };

    handleClick = () => {
        this.setState({
            checked: !this.state.checked
        })
    };

    render() {
        return <button onClick={this.handleClick}>{this.state.checked ? "TAK" : "NIE"}</button>
    }
}

function Task19() {
    return <CheckBox/>
}

export default Task19;
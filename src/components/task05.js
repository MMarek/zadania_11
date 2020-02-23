import React, {Component} from "react";

class StrobeLight extends Component{
    constructor(props) {
        super(props);

        this.state = {
            color: this.props.color,
            frequency: this.props.frequency
        }
    }

    componentDidMount() {

        this.intervalId = setInterval(() => {
            let currentColor = this.state.color;
            if (currentColor === 'white') {
                currentColor = this.props.color;
            }else{
                currentColor = 'white';
            }

            this.setState({
                color: currentColor
            })
        }, this.state.frequency)
    }

    render() {
        return(
            <div style={{width: '500px', height: '50px', backgroundColor: this.state.color}}>

            </div>
        )
    }
}

function Task05() {
    return<StrobeLight color={"blue"} frequency={400}/>
}

export default Task05;
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
}
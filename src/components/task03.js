import React, {Component} from "react";

class TextTyper extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lettersToShow: 1
        }
    }

    componentDidMount() {
        const {text} = this.props;
        let counter = this.state.lettersToShow;

        this.intervalId = setInterval(() => {
            counter++;
            if (counter >= text.length) {
                clearInterval(this.intervalId);
            }
            this.setState({
                lettersToShow: counter
            })
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const {lettersToShow} = this.state;
        const {text} = this.state;

        return <h1>{text.substr(0, lettersToShow)}</h1>
    }
}

function Task03() {
    return <TextTyper text={'Hexo-cyjano-żelazian-potasu'}/>
}

export default Task03;

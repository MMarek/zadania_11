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

        this.interval = setInterval(() => {
            this.setState({
            }, () => {
                counter++;
                this.setState({
                    lettersToShow: counter
                });

                if (counter >= text.length) {
                    clearInterval(this.interval);
                }
            });
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {lettersToShow} = this.state;
        const {text} = this.props;

        return (
            <h1>{text.substr(0, lettersToShow)}</h1>
        );
    }
}

function Task03() {
    return <TextTyper text={'Hexo-cyjano-żelazian-potasu'}/>
}

export default Task03;

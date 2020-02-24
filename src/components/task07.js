import React, {Component} from "react";

class Buttons extends Component {
    state = {
        textToShow: null
    };

    handleClickAndShowInfo(event, name) {
        event.preventDefault()
        this.setState({
            textToShow: "Pierwszy przycisk kliknięty przez" + name
        })
    }

    handleClickMathButton = () => {
        let num1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
        let num2 = parseFloat(prompt("Podaj drugą liczbę:"));

        this.setState({
            textToShow: Math.pow(num1,num2)
        });
    };

    handleClickWindowInfo = () => {
        console.log(this);
        this.setState({
            textToShow: `Window height: ${window.innerHeight} width: ${window.innerWidth}`
        });
    };

    render() {
        let textToShowJsx = this.state.textToShow ? <h1>{this.state.textToShow}</h1> : null;
        return (
            <>
                {textToShowJsx}
                <button onClick={(event) => this.handleClickAndShowInfo(event, " Ciebie :)")}>Klik</button>
                <button onClick={this.handleClickMathButton}>Klik</button>
                <button onClick={this.handleClickWindowInfo}>Klik</button>
            </>
        )
    }
}

function Task07() {
    return <Buttons/>
}

export default Task07;
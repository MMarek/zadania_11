import React, {Component} from "react";

class Button extends Component {
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

    render() {
        let textToShowJsx = this.state.texrToShow ? <h1>{this.state.textToShow}</h1> : null;
        return (
            <>
                {textToShowJsx}
                <button onClick={(event) => this.handleClickAndShowInfo(event, "Marek")}>Klik</button>
                <button onClick={this.handleClickMathButton}>Klik</button>
            </>
        )
    }
}

function Task07() {
    return <Button/>
}

export default Task07;
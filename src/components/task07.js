import React, {Component} from "react";

class Button extends Component {
    state = {
        texrToShow: null
    };

    handleClickAndShowInfo(event, name) {
        event.preventDefault()
        this.setState({
            textToShow: "Pierwszy przycisk kliknięty przez" + name
        })
    }

    render() {
        let textToShowJsx = this.state.texrToShow ? <h1>{this.state.textToShow}</h1> : null;
        return (
            <>
                {textToShowJsx}
                <button onClick={(event) => this.handleClickAndShowInfo(event, "Marek")}>Klik</button>
            </>
        )
    }
}

function Task07() {
    return <Button/>
}

export default Task07;
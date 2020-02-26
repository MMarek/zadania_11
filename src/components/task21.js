import React, {Component} from "react";

class NumberInfo extends Component {
    state = {
        number: this.props.number
    };

    render() {
        const isPrime = (num) => {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) return false;
            }
            return true;
        };

        const listStyle = {
            listStyle: 'none'
        };

        return (
            <div>
                <ul>
                    <li style={listStyle}>Liczba: {this.props.number}</li>
                    <li style={listStyle}>{this.props.number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
                    <li style={listStyle}>{isPrime(this.props.number) && "Liczba pierwsza"}</li>
                    <li style={listStyle}>{Math.log2(this.props.number) % 1 === 0 && "Potęga liczby 2"}</li>
                </ul>
            </div>
        )
    }
}

function Task21() {
    return(
        <>
        <NumberInfo number={1}/>
        <NumberInfo number={2}/>
        <NumberInfo number={5}/>
        <NumberInfo number={7}/>
        <NumberInfo number={10}/>
        <NumberInfo number={16}/>
    </>
        )
}

export default Task21;
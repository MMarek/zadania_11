import React, {Component} from "react";

class Shop extends Component {
    state = {
        list: []
    };

    addToList = (title) => {
        let newList = [...this.state.list];
        newList.push(title);

        this.setState({
            list: newList
        })
    };

    render() {
        return (
            <div>
                <ShopItem title='skarpetki' onBuy={this.addToList}/>
                <ShopItem title='koszula' onBuy={this.addToList}/>
                <ShopItem title='pończochy' onBuy={this.addToList}/>
                <ul>
                    {this.state.list.map(el, index) => <li key={index}>{el}</li>)}
                </ul>
            </div>
        );
    }
}

class ShopItem extends Component {
    handleClick = () => {
        if (typeof this.props.onBuy === 'function') {
            this.props.onBuy(this.props.title);
        }
    };

    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Kup</button>
            </>
        )
    }
}

function Task18() {
    return <Shop/>
}

export default Task18;
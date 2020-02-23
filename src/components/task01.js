import React, {Component} from "react";

class LifeCyclesTester extends Component{
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('did mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('update');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        console.log('render');
        return <h1>Test Component</h1>
    }
}

class Task01 extends Component{
    state = {
        hide: false
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            console.log('remove hide');
            this.setState({
                hide: true
            })
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        if (!this.state.hide) return <LifeCyclesTester />;
        return <h1>Removed component</h1>
    }
}

export default Task01;
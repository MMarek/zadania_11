import React, {Component} from "react";

// class Box extends Component {
//     state = {
//         on: false,
//         off: false,
//     };
//
//     handleMouseOn = () => {
//         this.setState({
//             on: true
//         });
//         console.log('najazd');
//     };
//
//     handleMouseOff = () => {
//         this.setState({
//             on: false
//         });
//         console.log('zjazd');
//     };
//
//     handleMouseOn1 = () => {
//         this.setState({
//             on: true
//         });
//         console.log('najazd');
//     };
//
//     handleMouseOff1 = () => {
//         this.setState({
//             off: false
//         });
//         console.log('zjazd');
//     };
//
//     render() {
//         const {on} = this.state;
//         const {off} = this.state;
//
//         let style = {
//             height: on ? '100px' : '10px',
//             width: on ? '100px' : '10px',
//             backgroundColor: on ? 'blue' : 'red',
//             transition: '5s',
//             position: 'absolute',
//             top: '550px'
//         };
//
//         let style1 = {
//             height: on ? '200px' : '50px',
//             width: on ? '200px' : '50px',
//             backgroundColor: on ? 'green' : 'black',
//             transition: '3s',
//             position: 'absolute',
//             left: '300px'
//         };
//
//         return (
//             <>
//                 <div style={style}
//                      onMouseEnter={this.handleMouseOn}
//                      onMouseLeave={this.handleMouseOff}>
//                 </div>
//                 <div style={style1}
//                      onMouseEnter={this.handleMouseOn1}
//                      onMouseLeave={this.handleMouseOff1}>
//                 </div>
//             </>
//         )
//     }
// }

class Box extends Component{
    state = {
        backgroundColor: 'green',
        height: '200px',
        width: '500px'
    };

    handleMouseEnterEvent = () => {
        this.setState({
            backgroundColor: 'blue',
            height: '400px'
        })
    };

    handleMouseLeaveEvent = () => {
        this.setState({
            backgroundColor: 'green',
            height: '200px'
        })
    };

    render() {
        return (
            <div
                onMouseEnter={this.handleMouseEnterEvent}
                onMouseLeave={this.handleMouseLeaveEvent}
                style={this.state}>
            </div>
        );
    }
}


function Task12() {
    return <Box/>
}

export default Task12;
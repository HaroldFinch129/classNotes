import React, { Component } from 'react'
import "./CounterStyle.css"
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ali",
            count: 0,
        }
        console.log("constructor");
    };
    render() {
        return ( <
            div className = "container" >
            <
            p > counter: < /p> <
            button > ARTTIR < /button> <
            button > AZALT < /button>

            <
            /div>
        )
    }
}
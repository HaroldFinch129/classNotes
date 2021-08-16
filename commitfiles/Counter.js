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

    increase = () => {
        this.setState({ count: this.state.count + 1 })
    }

    static getDerivedStateFromProps(props, state) {

        console.log("getDerivedStateFromProps", state);
        return null
    }

    shouldComponentUpdate() {
        console.log("Should Update???");
        return true
    }

    componentDidMount = () => {
        console.log("Component mounted!");
        console.log("-----------------")
    }
    componentDidUpdate = () => {
        console.log("Updated");
        console.log("------------------")
    }

    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("snapshor", prevstate)
        return null
    }

    componentWillUnmount() {
        console.log("will unmount bye!");
    }
    render() {
        console.log("render")
        return ( <
            div className = "container" >
            <
            p > counter: { this.state.count } < /p>  <
            button onClick = {
                () => this.increase() } > ARTTIR < /button>  <
            button onClick = {
                () => this.componentWillUnmount() } > Azalt < /button>

            <
            /div>
        )
    }
}
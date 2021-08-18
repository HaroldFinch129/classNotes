import React from "react";
class ClassComponent extends React.Component {
    state = {
        counter: 0,
    };
    increase = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render() {
        console.log("Class Counter:", this.state.counter);
        return ( <
            div className = "class" >
            <
            h2 > Class Component < /h2> <
            p > Counter: { this.state.counter } < /p> <
            button onClick = {
                () => this.increase() } > Increse < /button> <
            /div>
        );
    }
}
export default ClassComponent;
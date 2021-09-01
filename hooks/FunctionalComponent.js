import { useState, useRef } from "react";
const FunctionalComponent = () => {
    const inputRef = useRef(null);
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState("");
    // useEffect(() => {
    //   console.log("useEffect");
    //   return () => {console.log("func. comp. unmount")}
    // },[counter])
    // console.log("Func Comp Rendered!")
    const increase = () => {
        setCounter(counter + 1);
    };
    const changeBGColor = () => {
        console.log(inputRef.current);
    };
    const handleText = (e) => {
        setText(e.target.value);
    };
    return ( <
        div className = "function" >
        <
        h2 > Functional Component < /h2> <
        p > Counter: { counter } < /p> <
        button onClick = {
            () => increase() } > Increase < /button> <
        hr / >
        <
        input ref = { inputRef }
        type = "text"
        value = { text }
        onChange = { handleText }
        /> <
        button onClick = {
            () => changeBGColor() } > BG Color < /button> <
        /div>
    );
};
export default FunctionalComponent;
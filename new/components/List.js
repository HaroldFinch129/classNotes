import React from "react";
import ListItem from "./ListItem";
const List = React.memo(({ students, add }) => {
    console.log("Rendering: List Comp!");
    return ( <
        div className = "list" >
        <
        button onClick = {
            () => add() } > Add < /button> {
            students ? .map((students) => {
                return <ListItem key = { students.id }
                students = { students }
                add = { add }
                />;
            })
        } <
        /div>
    );
});
export default List;
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const Post = () => {
        const { id } = useParams();
        const slugItems = new URLSearchParams(useLocation().search);
        return ( <
            div >
            <
            h2 > Post id: { id } < /h2> <
            h2 > Posttaki name: { slugItems.get('name') } < /h2> <
            h2 > Posttaki name: { slugItems.get('second') } < /h2> <
            /div>
        )
    }
    /* const Post = () => {
        const {id } = useParams();
        return (
            <div>
                <h2>Post id:{id} </h2>
            </div>
        )
    } */
    /* const Post = ({ match }) => {
        return (
            <div>
                <h2>Post id:{match.params.id} </h2>
            </div>
        )
    } */
export default Post
import React from "react";

export default function Enjoy(props) {
    return (
    <>
    <h3> I enjoy: </h3>
    <ul>
        <li>{props.fav1}</li>
        <li>{props.fav2}</li>
        <li>{props.fav3}</li>
    </ul>
    </>
    );
}
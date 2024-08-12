import React from "react";

function Square2({ value, onSquareClick }) {

    return (<button className="square" onClick={onSquareClick}>{value}</button>
    );
}


export default Square2
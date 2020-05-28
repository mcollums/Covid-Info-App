import React from "react";
import "./style.css";
import * as d3 from 'd3';

export function D3Graph(props) {

    console.log(JSON.stringify(props.data));
    return (
        <>
        <p>{props.country}</p>
        </>
    )
}


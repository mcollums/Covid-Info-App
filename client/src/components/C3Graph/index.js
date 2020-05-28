import React, { useRef, useEffect } from "react";
import "./style.css";
import C3Chart from 'react-c3js';
import 'c3/c3.css';

const LineChart = ({ data }) =>
    <C3Chart data={{ json: data }} />;

// const chartData = {
//     line: {
//         data1: [30, 20, 50, 40, 60, 50]
//         // data2: [200, 130, 90, 240, 130, 220],
//         // data3: [300, 200, 160, 400, 250, 250]
//     }
// };

export function C3Graph(props) {
    const dataObj = { 
        confirmed: props.confirmedData,
        deaths: props.deathData,
        active: props.activeArr,
        recocered: props.recoveredArr
    }

    return (
        <>
            <p>{props.country}</p>
            <LineChart data={dataObj} />
        </>
    )
}


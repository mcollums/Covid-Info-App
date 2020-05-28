import React, {useRef, useEffect} from "react";
import "./style.css";
import * as d3 from 'd3';

export function D3Graph(props) {
    const d3Container = useRef(null);

    useEffect(
        () => {
            if (props.data && d3Container.current) {
                const svg = d3.select(d3Container.current);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(props.data.history);

                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */
        [props.data.history, d3Container.current])

    console.log(JSON.stringify(props.data));
    return (
        <>
        <p>{props.country}</p>
        <svg
            className="d3-component"
            width={400}
            height={200}
            ref={d3Container}
        />
        </>
    )
}


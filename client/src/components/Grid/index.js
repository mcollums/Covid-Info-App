import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container and allows custom classNames if present
export function Container({ fluid, children, classes }) {
  return <div className={`${classes ? classes : ""} container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row and allows custom classNames if present
export function Row({ fluid, children, classes }) {
  return <div className={`${classes ? classes : ""} row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax and allows custom classNames if present
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children, classes }) {
  const colSize = size.split(" ").map(size => "col-" + size).join(" ");
  return (
    <div className={`${classes ? classes : ""} ${colSize}`}>
      {children}
    </div>
  );
}

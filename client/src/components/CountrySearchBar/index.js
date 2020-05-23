import React from "react";
import "./style.css";
import { DropDown, FormBtn } from "../Form";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function CountrySearchBar(props) {
    return (
        <div className="country-search">
        <form className="country-search">
            <DropDown
                onChange={props.onChange}
                name="country"
                placeholder="Country (optional)"
                floatdir={"left"}
            />
            <FormBtn
                disabled={!(props.country)}
                onClick={props.onClick}
                floatdir={"left"}
            >
                Search Country
            </FormBtn>
        </form>
        </div>
    );
}

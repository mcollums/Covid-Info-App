import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Graph() {
    // Setting our component's initial state
    const [covidData, setCovidData] = useState({})
    const [formObject, setFormObject] = useState({})

    // Load global data and store them with setCovidData
    useEffect(() => {
        loadCovidData("global")
    }, [])

    // Loads covid data based on location and sets them to covidData
    function loadCovidData(location) {
        API.getCovidData(location)
            .then(res =>
                setCovidData(res.data)
            )
            .catch(err => console.log(err));
    };

    // TODO - clears country and city information from state
    function resetData() {
        console.log('reset Data')
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value }) //takes past state and overwrites the property being passed from input field
    };

    // When the form is submitted, use the API.getCovidData based on the location
    function handleFormSubmit(event) {
        event.preventDefault();
        loadCovidData(formObject.location);
    };

    return (
        <Container fluid>
            <Row>
                <Col size="1" />
                <Col size="3">
                    <h6>Covid International Statistics</h6>
                </Col>
                <Col size="7">
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="location"
                            placeholder="Country (optional)"
                            floatdir={"left"}
                        />
                        <FormBtn
                            disabled={!(formObject.location)}
                            onClick={handleFormSubmit}
                            floatdir={"left"}
                        >
                            Search Country
                    </FormBtn>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col size="1" />
                <Col size="md-8 sm-12">
                    <h4>{covidData.location} Covid-19 Statistics</h4>
                    <p>{covidData.recovered} Total Recovered</p>
                    <p>{covidData.deaths} Total Deaths</p>
                    <p>{covidData.confirmed} Confirmed Cases</p>
                    <p>{covidData.lastReported} Date Reported</p>
                </Col>
            </Row>
        </Container>
    );
}


export default Graph;

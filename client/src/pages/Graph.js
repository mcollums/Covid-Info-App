import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { CountrySearchBar } from "../components/CountrySearchBar";


function Graph() {
    // Setting the component's initial state
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
        console.log(event.target.value)
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value }) //takes past state and overwrites the property being passed from input field
        // loadCovidData(formObject.country)
    };

    // When the form is submitted, use the API.getCovidData based on the FormObject's location
    function handleFormSubmit(event) {
        event.preventDefault();
        loadCovidData(formObject.country);
    };

    return (
        <Container fluid>
            <Row>
                <Col size="1" />
                <Col size="3">
                    <h6>Covid International Statistics</h6>
                </Col>
                <Col size="7">
                    <CountrySearchBar
                        onClick = {handleFormSubmit}
                        onChange={handleInputChange}
                        country={formObject.country}
                    />
                </Col>
            </Row>
            <Row>
                <Col size="1" />
                <Col size="md-8 sm-12">
                    {/* This ternary operator keeps the page from showing the template if there's not data in the state */}
                    {JSON.stringify(covidData) !== '{}' ? //If covid Data is not empty, show data 
                        (<>
                            <h4>{covidData.location} Covid-19 Statistics</h4>
                            <p>{covidData.recovered} Total Recovered</p>
                            <p>{covidData.deaths} Total Deaths</p>
                            <p>{covidData.confirmed} Confirmed Cases</p>
                            <p>{covidData.lastReported} Date Reported</p>
                        </>)
                        : (console.log("No Data")) // otherwise, show nothing
                    }
                </Col>
            </Row>
        </Container>
    );
}


export default Graph;

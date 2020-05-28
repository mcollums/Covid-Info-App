import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "./style.css"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { CountrySearchBar } from "../../components/CountrySearchBar";
import { D3Graph } from "../../components/d3Graph";



function Graph() {
    // Setting the component's initial state
    const [covidData, setCovidData] = useState({})
    const [formObject, setFormObject] = useState({})

    // Load global data and store them with setCovidData
    //PRODUCTION TODO - Implement the Global Default Search
    useEffect(() => {
        // loadCovidData("global")
    }, [])

    // Loads covid data based on location and sets them to covidData
    function loadCovidData(location) {
        console.log(location);
        API.getHistoryByCountry(location)
            .then(res => {
                setCovidData(res.data);
                // console.log(JSON.stringify(covidData));
            }
            ).then(res => console.log("loadCovidData " + JSON.stringify(covidData.history)))
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
            <Row classes="search-row">
                <Col size="1" />
                <Col size="3">
                    <h5>Search by Country and City</h5>
                </Col>
                <Col size="7">
                    <CountrySearchBar
                        onClick={handleFormSubmit}
                        onChange={handleInputChange}
                        country={formObject.country}
                    />
                </Col>
            </Row>
            <Row>
                <Col size="1" />
                <Col size="md-8 sm-12">
                    {JSON.stringify(covidData) !== '{}' ?
                        <D3Graph
                            country={formObject.country}
                            data={covidData}
                        />
                        : console.log("No Data")}
                </Col>
            </Row>
        </Container>
    );
}


export default Graph;

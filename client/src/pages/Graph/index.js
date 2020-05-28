import React, { useState, useEffect } from "react";
// import * as d3 from "d3";
import "./style.css"
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { CountrySearchBar } from "../../components/CountrySearchBar";
import { C3Graph } from "../../components/C3Graph";



function Graph() {
    // Setting the component's initial state
    const [covidData, setCovidData] = useState({})
    const [formObject, setFormObject] = useState({})
    const [search, setSearch] = useState({})
    const [confirmedArr, setConfirmedArr] = useState({})
    const [deathArr, setDeathArr] = useState({})
    const [activeArr, setActiveArr] = useState({})
    const [recoveredArr, setRecoveredArr] = useState({})




    // Load global data and store them with setCovidData
    //PRODUCTION TODO - Implement the Global Default Search
    useEffect(() => {
        async function loadCovidData() {
            const apiData = await API.getHistoryByCountry(search);
            const json = await apiData.data.history;
            await setCovidData(json);
            await handleDataArr(json);

        };
        if (JSON.stringify(search) !== '{}') {
            loadCovidData();
        }
    }, [search]);

    function handleDataArr(json) {
        const c = json.map(object => object.Confirmed);
        const d = json.map(object => object.Deaths);
        const a = json.map(object => object.Active);
        const r = json.map(object => object.Recovered);

        setConfirmedArr(c);
        setDeathArr(d);
        setActiveArr(a);
        setRecoveredArr(r);
    };

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        console.log(event.target.value)
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value }) //takes past state and overwrites the property being passed from input field
    };

    // When the form is submitted, use the API.getCovidData based on the FormObject's location
    function handleFormSubmit(event) {
        event.preventDefault();
        setSearch(formObject.country);
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
                        <C3Graph
                            country={formObject.country}
                            confirmedData={confirmedArr}
                            deathData={deathArr}
                            activeArr={activeArr}
                            recoveredArr={recoveredArr}
                        />
                        : console.log("No Data")}
                </Col>
            </Row>
        </Container>
    );
}


export default Graph;

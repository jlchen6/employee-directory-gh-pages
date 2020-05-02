import React from "react";
import Col from "../Col";
import Row from "../Row";

function EmployeeCard(props) {
    return (
        <Row>
            <Col size = "md-1">
                <img alt={props.name} src={props.picture} className="img-fluid"/>
            </Col>
            <Col size = "md-2">
                <p> {props.name} </p>
            </Col>
            <Col size = "md-2">
                <p> {props.phone} </p>
            </Col>
            <Col size = "md-4">
                <a href = {props.email}> {props.email} </a>
            </Col>
            <Col size = "md-2">
                <p> {props.dob.toDateString()} </p>
            </Col>
        </Row>
    );
}

export default EmployeeCard;
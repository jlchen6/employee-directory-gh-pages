import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./style.css";

function EmployeeHeader() {
    return (
        <Row>
            <Col size="md-1">
                <h4>Image</h4>
            </Col>
            <Col size="md-2">
                <h4>Name</h4>
            </Col>
            <Col size="md-2">
                <h4>Phone</h4>
            </Col>
            <Col size="md-4">
                <h4>Email</h4>
            </Col>
            <Col size="md-2">
                <h4>DOB</h4>
            </Col>
        </Row>
    );
}

export default EmployeeHeader;
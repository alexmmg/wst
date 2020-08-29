import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Header from "./Header/Header";


const App = () => {
    return (
        <Container fluid className="m-0 p-0">
            <Header />
            <Row className="m-0 h-100">
                <Col xs={3}>Sidebar</Col>
                <Col>Main</Col>
            </Row>
            <Card>
                <Card.Footer className="fixed-bottom">
                    footer
                </Card.Footer>
            </Card>
        </Container>
    )
};

export default App;

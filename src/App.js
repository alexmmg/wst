import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Body/Main";
import Sidebar from "./Body/Sidebar";


const App = () => {
    return (
        <Container fluid className="m-0 p-0 mh-100 vh-100">
            <Header/>
            <Row className="m-0 h-90">
                <Col xs={3}>
                    <Sidebar />
                </Col>
                <Col>
                    <Main />
                </Col>
            </Row>
                <Card.Footer className="fixed-bottom">
                    <Footer />
                </Card.Footer>
        </Container>
    )
};

export default App;

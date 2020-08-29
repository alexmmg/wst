import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from "react";
import mainLogo from "../assets/img/header/main_logo.svg"
import Row from "react-bootstrap/Row";

const Header = () => {

    const showInConsole = () => {
        let chessBoard = "";
        const n = 8;
        for (let a = 0; a < n; a++) {
            for (let b = 0; b < n; b++) {
                chessBoard += (a % 2) == (b % 2) ? " " : "#";
            }
            chessBoard += "\n";
        }
        console.log(chessBoard);
    };

    return (
        <div className="header">
                <Card.Header className="m-0">
                    <Row className="justify-content-between">
                        <Col xs={2}>
                            <img src={mainLogo} alt="Main Logo" className="mainLogo"/>
                        </Col>
                        <Col xs={1} className="d-flex">
                            <div className="align-self-center">
                                <button className="btn btn-primary my-2" onClick={showInConsole}>PUSH</button>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
        </div>
    )
};

export default Header;

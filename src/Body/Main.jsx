import React from "react";
import Header from "../Header/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import mainImg from "../assets/img/body/bodyImg.jpg";

const Main = () => {

    return (
        <Container>
            <Row className="mt-2">
                <Col xs={4}>
                    <img className="img-fluid" src={mainImg}/>
                </Col>
                <Col xs={8}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut autem beatae culpa,
                        deleniti dolores ea exercitationem id in inventore ipsa molestias mollitia natus nobis. Atque
                        earum eum illum quo vel veniam veritatis.
                        deleniti dolores ea exercitationem id in inventore ipsa molestias mollitia natus nobis, non
                        numquam odit officia pariatur quia quibusdam. Non
                        numquam odit officia pariatur quia quibusdam ratione repellat reprehenderit similique sint
                        voluptate voluptatum? Atque earum eum illum quo vel veniam veritatis. Ab animi atque beatae
                        blanditiis consectetur corporis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        amet aut autem beatae culpa. Atque earum eum illum quo vel veniam veritatis.
                        deleniti dolores ea exercitationem id in inventore ipsa molestias mollitia natus nobis, non
                        numquam odit officia pariatur quia quibusdam.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aut autem beatae culpa,
                        deleniti dolores ea exercitationem id in inventore ipsa molestias mollitia natus nobis, non ,
                        cupiditate delectus deserunt
                        doloremque ducimus eum eveniet ex la, omnis optio quam quas quos reiciendis saepe sapiente
                        similique suscipit unde velit voluptas voluptatem voluptatibus voluptatum? Beatae minus mollitia
                        quas?
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={3}>
                    <div>
                        <button className="btn btn-secondary my-2">SEND FILE</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Main;
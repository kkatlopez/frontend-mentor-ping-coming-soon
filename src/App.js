import React, { useState } from "react";
import validator from "validator";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Button,
    Container,
    Row,
    Col,
    Image,
    Form
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import pingLogo from './images/logo.svg';
import illustration from './images/illustration-dashboard.png';

function App() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [errorClass, setErrorClass] = useState("");

    const handleValueChange = (e) => {
        setEmail(e.target.value);
    }

    const validateEmail = () => {
        if (!validator.isEmail(email)) {
            setEmailError("Please enter a valid email address");
            setErrorClass("error-input");
        } else {
            setEmailError("");
            setErrorClass("");
        }
    }

    return (
        <Container fluid className="d-flex flex-column">
            <div id="main" className="my-auto">
                <Row>
                    <Image src={pingLogo} fluid id="logo" className="mx-auto"/>
                </Row>
                <Row>
                    <h1 id="header">We are launching <span>soon!</span></h1>
                    <p id="subheader">Subscribe and get notified</p>
                </Row>
                <Form id="email" className="mb-3">
                    <Row>
                        <Col xs={12} md={8} className="mb-3">
                            <Form.Control type="email" size="lg" className={errorClass} placeholder="Your email address..." onChange={(e) => handleValueChange(e)} />
                            <span className="error-text">
                                {emailError}
                            </span>
                        </Col>
                        <Col xs={12} md={4}>
                            <Button onClick={validateEmail} varaint="primary" size="lg" className="w-100">Notify Me</Button>
                        </Col>
                    </Row>
                </Form>
                <Row className="pt-4" id="img-container">
                    <Image src={illustration} id="illustration" className="img-responsive" />
                </Row>
            </div>
            <div id="footer">
                <Row className="d-flex justify-content-center">
                    <FontAwesomeIcon icon={faFacebookF} className="fa-fw social" />
                    <FontAwesomeIcon icon={faTwitter} className="fa-fw social" />
                    <FontAwesomeIcon icon={faInstagram} className="fa-fw social" />
                    <p>&copy; Copyright Ping. All rights reserved.</p>
                </Row>            
            </div>
        </Container>
    );
}

export default App;

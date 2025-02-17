import React from "react";
import "./App.css";
import Name from "./components/Name.jsx";
import Description from "./components/Description.jsx";
import Image from "./components/Image.jsx";
import Price from "./components/Price.jsx";
//import userinfo from "src/userinfo.jsx";
import { Button, Container, Navbar, Card, Col, Nav } from "react-bootstrap";
let firstName = "oussema ";
let lastName = "Kossentini";


const Greetings = ({ firstName, lastName }) => {
    if ((firstName && lastName) !== "") {
        return (
            <>
                <p>Hello, {firstName} {lastName}</p>

            </>
        );
    } else {
        return(

            <>

                <img
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                    alt="Greeting"
                    className="greeting-image"
                />
                <p>Hello, there!</p>;
            </>);
    }
};

function App() {
    return (
        <div className="App">

            <Navbar bg="dark" variant="dark" expand="sm">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="mt-5">
                <Greetings firstName={firstName} lastName={lastName}/>
            </div>
            <main className="container mt-4 d-flex justify-content-center">
                <div className="cards-container">
                    <Col md={6}>
                        <Card className="shadow-lg">


                            <Image/>
                            <Card.Body>

                                <Card.Title>
                                    <Name/>
                                </Card.Title>

                                <Card.Text>
                                    <Description/>
                                    <Price/>
                                </Card.Text>

                                <Button variant="primary">Acheter</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>

            </main>
        </div>
    );
}

export default App;
import React from "react";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
const Main = () => (
    <Container>
        <img src={logo} alt="GitHub Compare" />
        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button>+</button>
        </Form>
    </Container>
);

export default Main;

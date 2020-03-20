import React from "react";
import logo from "../../assets/logo.png";
import { Div, Form } from "./styles";
const Main = () => (
    <Div>
        <img src={logo} alt="GitHub Compare" />
        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button>+</button>
        </Form>
    </Div>
);

export default Main;

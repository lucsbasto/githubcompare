import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;
    input {
        flex: 1;
        padding: 0 20px;
        height: 55px;
        background-color: #fff;
        color: #444;
        font-size: 16px;
        border-radius: 5px;
        border: 0;
    }
    button {
        height: 55px;
        padding: 0 20px;
        background-color: #63f5b0;
        margin-left: 10px;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        font-size: 20px;
        transition: all 0.2s ease-out;
        &:hover {
            background-color: #52d89f;
            box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
        }
        &:active {
            background-color: #52d89f;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
            transform: translateY(2px);
        }
    }
`;

const Main = () => (
    <Div>
        <img src={logo} alt="GitHub Compare" />
        <Form>
            <input type="text" placeholder="usuário/repositório" />
            <button>OK</button>
        </Form>
    </Div>
);

export default Main;

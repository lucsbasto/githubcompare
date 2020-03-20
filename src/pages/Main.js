import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

const Main = () => (
    <Div>
        <img src={logo} alt="GitHub Compare" />
        <form action="">
            <input type="text" placeholder="usuário/repositório" />
            <button type="submit">OK</button>
        </form>
    </Div>
);

export default Main;

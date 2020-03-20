import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
`;

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
    max-width: 400px;
    display: flex;
    input {
        flex: 1;
        padding: 0 20px;
        height: 55px;
        background-color: #fff;
        color: #999;
        font-size: 16px;
        border-radius: 5px;
        border: ${props => (props.onError ? "1px solid red" : 0)};
        animation-name: ${props => (props.onError ? "treme" : "")};
        animation-duration: ${props => (props.onError ? "0.5s" : 0)};
    }

    button {
        width: 55px;
        height: 55px;
        padding: 0 10px;
        background-color: ${props => (props.onError ? "#FF6347" : "#63f5b0")};
        margin-left: 10px;
        border: 0;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        font-size: 35px;
        transition: all 0.2s ease-out;
        border: ${props => (props.onError ? "1px solid red" : 0)};
        animation-name: ${props => (props.onError ? "treme" : "")};
        animation-duration: ${props => (props.onError ? "0.5s" : 0)};
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

    @keyframes treme {
        0% {
            transform: translateY(2px);
            transform: translateX(2px);
        }
        10% {
            transform: translateY(-2px);
            transform: translateX(-2px);
        }
        20% {
            transform: translateY(2px);
            transform: translateX(2px);
        }
        30% {
            transform: translateY(-2px);
            transform: translateX(-2px);
        }
        40% {
            transform: translateY(2px);
            transform: translateX(2px);
        }
        50% {
            transform: translateY(-2px);
            transform: translateX(-2px);
        }
        60% {
            transform: translateY(2px);
            transform: translateX(2px);
        }
        70% {
            transform: translateY(-2px);
            transform: translateX(-2px);
        }
        80% {
            transform: translateY(2px);
            transform: translateX(2px);
        }
        90% {
            transform: translateY(-2px);
            transform: translateX(-2px);
        }
        100% {
            transform: translateY(0px);
            transform: translateX(0px);
        }
    }
`;

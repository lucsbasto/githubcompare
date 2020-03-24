import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`;

export const Repository = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 250px;
    border-radius: 5px;
    margin: 0 10px;
    button {
        margin: 10px;
    }
    header {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        justify-content: center;
        position: relative;
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        button#apagar {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 30px;
            width: 30px;
        }
        button#refresh {
            position: absolute;
            top: 0px;
            left: 200px;
            height: 30px;
            width: 30px;
        }
        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 64px;
        }
        strong {
            font-size: 24px;
            padding-top: 10px;
        }
        small {
            font-size: 12px;
            color: #666;
            padding-bottom: 10px;
        }
    }
    ul {
        list-style: none;
        li {
            color: #666;
            font-weight: bold;
            padding: 12px 20px;
            small {
                font-weight: normal;
                font-size: 12px;
                font-style: italic;
            }
            &:nth-child(2n-1) {
                background-color: #f5f5f5;
            }
        }
    }
`;

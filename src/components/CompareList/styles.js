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

    header {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
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
            font-weight: bold;
            padding: 12px 20px;
            small {
                font-weight: normal;
                font-size: 12px;
                color: #999;
                font-style: italic;
            }
            &:nth-child(2n-1) {
                background-color: #f5f5f5;
            }
        }
    }
`;

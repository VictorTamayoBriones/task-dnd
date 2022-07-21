import styled from 'styled-components';

export const Main = styled.main`
    background: transparent;
    height: 100vh;
    padding: 50px 10px 30px 10px;
    width: 95%;
    min-width: 400px;
    overflow-x: scroll;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media(max-width: 700px){
        min-width: 900px;
        justify-content: flex-start;
    }
`;
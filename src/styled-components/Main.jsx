import styled from 'styled-components';

export const Main = styled.main`
    background: transparent;
    height: 100vh;
    padding: 50px 10px 30px 10px;
    width: 95%;
    min-width: 400px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media(max-width: 700px){
        width: ${ (props)=>props.isOnAddTask ? 'auto' : '900px' };
        overflow: ${ (props)=>props.isOnAddTask ? 'hidden' : 'visible' };
        height: 90vh;
    }
`;
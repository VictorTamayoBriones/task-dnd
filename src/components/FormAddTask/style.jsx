import styled from 'styled-components';

export const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: ${ (props)=>props.isOnAddTask ? 'block' : 'none' };
    background: #000000a6;
    z-index: 1;
`;
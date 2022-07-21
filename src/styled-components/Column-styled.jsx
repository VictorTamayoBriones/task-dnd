import styled from 'styled-components';
import { theme } from '../theme';

export const Col = styled.div`
    background: #000f15;
    width: 30%;
    min-width: 200px;
    margin: 20px 0;
    padding: 15px 20px;
    border-radius: 5px;
    border: solid 2px ${ theme.moradoClaro };
    box-shadow: 0px 0px 9px 2px ${ theme.moradoOClaro2 };

    h2{
        color: ${ theme.azul }
    }

    
`;
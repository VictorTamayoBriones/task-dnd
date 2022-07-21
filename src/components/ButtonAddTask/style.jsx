import styled from 'styled-components';
import { theme } from '../../theme';

export const Button = styled.button`
    position: absolute;
    top: 15px;
    background: #000f15;
    color: ${ theme.moradoClaro };
    padding: 5px 20px;
    border: solid 1px ${ theme.moradoClaro };
    border-radius: 3px;
    box-shadow: 0px 0px 5px ${ theme.moradoOClaro2 };
    font-size: 18px;
    cursor: pointer;
`;
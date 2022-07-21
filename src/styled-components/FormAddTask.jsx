import styled from 'styled-components';
import { theme } from '../theme';

export const Form = styled.form`
    width: 50%;
    height: max-content;
    margin: 50px auto;
    padding: 20px;
    background: #000f15;
    border: 1px solid ${ theme.moradoClaro };
    border-radius: 3px;
    box-shadow: 0px 0px 9px ${ theme.moradoOClaro2 };


    h2{
        color: ${ theme.azul };
    }

    input{
        width: 100%;
        margin: 10px 0 20px 0;
        background: transparent;
        border: none;
        border-radius: 0;
        padding-bottom: 5px;
        caret-color: ${ theme.moradoClaro };
        border-bottom: 1px solid ${ theme.moradoClaro };
        outline: none;
        color: ${ theme.moradoOClaro2 };
        font-size: 20px;
        &::placeholder{
            color: #ffffff58;
            font-weight: 200;
        }
    }


    .buttons{
        width: 100%;
        display: flex;
        justify-content: space-between;
        button{
            font-size: 18px;
            width: 48%;
            background: transparent;
            color: ${ theme.moradoClaro };
            border: 1px solid ${ theme.moradoClaro };
            border-radius: 3px;
            padding: 5px 0;
            cursor: pointer;
        }
    }


    @media(max-width: 700px){
        width: 95%;
    }

`;
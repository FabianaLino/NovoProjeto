import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .container-total{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
    }
            
    .contatiner1{
        position: absolute;
        width: 60%;  
        height: 100vh; 
        box-shadow: 2px 4px 6px #fefefe;  
        background-image: radial-gradient(
            circle at 50% 50%,
            #c5b9a5 0, 
            #e1d3bd 50%,
            #f2eee7 100%
        );
       
    }

    .container2{
        display: flex;
        align-items: center;
        width: 40%;
        height: 100vh;
        background: #f8f6f4;
    }
`;



export const Form= styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    heigth: 45vh;
    align-items: center;

    .input{
        margin: auto;
        width: 60%;
        justfy-content: center;
        background: #fff;
        margin-bottom: 20px;
    };  
 
`;


export const Logo = styled.form`
 
`;

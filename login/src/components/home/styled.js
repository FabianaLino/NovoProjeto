import { styled } from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    .container-total {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
    }
            
    .container1 {
        width: 60%;  
        background-image: radial-gradient(
            circle at 50% 50%,
            #b5835b 0, 
            #c4814d 50%,
            #e3b086 100%
        );
        box-shadow: 2px 4px 6px #fefefe; 
        height: 100vh;     
    }
    @media (max-width: 999px) {
        .container1 {
            display: none;
        }        
    };


    .image {
        margin: auto;
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        height: 100%;
    }

    .container2 {
        display: flex;
        align-items: center;
        width: 40%;
        height: 100vh;
        background: #fcf5f0;        
    }
    @media (max-width: 999px) {
        .container2 {
            width: 100%;            
        }        
    };
`;



export const Form= styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    heigth: 45vh;
    align-items: center;

    @media (max-width: 999px) {
        height: 60vh;
        margin:10%;
        background-image: radial-gradient(
            circle at 50% 50%,
            #b5835b 0, 
            #c4814d 50%,
            #e3b086 100%
        );
        border-radius: 20px;                
    };

    .input {
        font-family: 'Ysabeau SC', sans-serif;
        margin-top: 15px;
        width: 60%;
        display: flex;
        justfy-content: center;
        background: #fff;
        margin-bottom: 20px;
    };  

    .botao-btn:hover {
        heigth: 20px;
        cursor: pointer;
        background-color: #d48948;
        font-family: 'Ysabeau SC', sans-serif;        
    };   
    @media (max-width: 999px) {
       .input{
            width: 80%;
            font-family: 'Ysabeau SC', sans-serif;
            font-size: 20px;     
       };   
       .botao-logar{
           width: 50%;                            
       }; 

       .botao-btn{
            width: 100%;
            height: 80%; 
            justfy-content: center;
            background-color: #FF8C00;
            margin-top: 15px; 
            font-family: 'Ysabeau SC', sans-serif;
            font-size: 20px;                        
       };    
    };
    
`;


export const Logo = styled.form`
    font-family: 'Ysabeau SC', sans-serif;
    width:60%;
    font-size:20px;
`;

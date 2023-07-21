import React from "react";
import { Container, Form, Logo } from "./styled";
import FilledInput from "@mui/material/FilledInput";


export const Home=()=>{
  return (
        <Container>
            <div className="container-total">
                <div className="container1">
                    <div className="image">
                        <img
                            src="chanel2.png"
                            width={400}
                            height={400}

                            className="img-banner"
                            alt="banner"
                        />
                    </div>
                </div>
                <div className="container2">
                    <Form>
                        <Logo>
                            <h1>Bem Vindo!</h1>                  
                        </Logo>
                        <FilledInput 
                            id="filled-adorment-weight"
                            className="input"
                            placeholder="Login"                         
                        />           
                        <FilledInput
                            id="filled-adorment-weight"
                            className="input" 
                            type="password"                         
                            placeholder="Senha"                            
                        />  
                        <div className="botao-logar">
                            <button className="botao-btn">Login</button>
                        </div>  
                    </Form>                    
                </div>    
            </div>                                                       
        </Container>                       
    );
};
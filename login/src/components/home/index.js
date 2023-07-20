import React from "react";
import { Container, Form, Logo } from "./styled";
import FilledInput from "@mui/material/FilledInput";
import { Foto } from "./imagem/Foto.jpg";


export const Home=()=>{
  return (
        <Container>
            <div className="container-total">
                <div className="contatiner1">
                    <img className="img-produto" src={ Foto } alt="Produto"></img>
                </div>
                <div className="container2">
                    <Form>
                        <Logo>
                            <h1>Login</h1>                  
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
                    </Form>                    
                </div>    
            </div>                                                       
        </Container>                       
    );
};
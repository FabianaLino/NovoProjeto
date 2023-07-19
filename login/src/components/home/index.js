import React from "react";
import { Container, Form, Logo } from "./styled";
import { FilledInupt } from "@mui/material/FilledInput";

export const Home=()=>{
  return (
        <Container>
            <div className="container-total">
                <div className="contatiner1">
                    <div className="imagemprincipal"><h1>teste1</h1></div>
                </div>

                <div className="container2">
                    <Form>
                        <Logo>
                            <h3>Login</h3>                  
                        </Logo>
                        <FilledInupt>
                            id="filled-adorment-weight"
                            className="input"
                            placeholder="Login"
                        </FilledInupt>
                    </Form>                    
                </div>    
            </div>                                                       
        </Container>    
                       
    );
};
import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar2 from "@/components/Navbar2";
import SignUpForm from "@/components/SignUpForm";





const ParentContainer = styled.main`
  width: 100vw;
  padding: 0;
  height: 100vh;
`


export default function Login() {
        return (
            <ParentContainer>
                <Navbar2/>
                <SignUpForm>

                </SignUpForm>
            </ParentContainer>
            
        );
    }
      

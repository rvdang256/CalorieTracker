
import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar2 from "@/components/Navbar2";
import Login2 from "@/components/Login2";





const ParentContainer = styled.main`
  width: 100vw;
  padding: 0;
  height: 100vh;
`
const FormContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    `;

const Input = styled.input`
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    `;
 const Button = styled.button`
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;



export default function Login() {
        return (
            <ParentContainer>
                <Navbar2/>
                <Login2/>
            </ParentContainer>
            
        );
    }
      

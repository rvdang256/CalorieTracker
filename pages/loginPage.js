import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar2 from "@/components/Navbar2";
import Login from "@/components/Login";





const ParentContainer = styled.main`
  width: 100vw;
  padding: 0;
  height: 100vh;
`


export default function loginPage() {
        return (
            <ParentContainer>
                <Navbar2/>
                <Login/>
            </ParentContainer>
            
        );
    }
      

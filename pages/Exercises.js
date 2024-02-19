import { Inter } from "next/font/google";
import styled from "styled-components";
import Navbar2 from "@/components/Navbar2";
import SearchBar2 from "@/components/SearchBar2";





const ParentContainer = styled.main`
  width: 100vw;
  padding: 0;
  height: 100vh;
`


export default function Exercises() {
        return (
            <ParentContainer>
                <Navbar2/>
                <SearchBar2/>

            </ParentContainer>
            
        );
    }
      

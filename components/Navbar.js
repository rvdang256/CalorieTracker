import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <Holder>
        <Logobox>
            Taco Bell

        </Logobox>

        <NavigationButtonHolder>
            <NavigationElement>
                Menu
            </NavigationElement>
            <NavigationElement>
                Menu
            </NavigationElement>
            <NavigationElement>
                Menu
            </NavigationElement>
        </NavigationButtonHolder>
        </Holder>

    </Container>
    
  )
}

const Container = styled.div`
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1vw;
    background-color: gray;
`
const Holder = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;

   //background-color: red;

`
const Logobox = styled.div`
    font-size: 2vw;
    font-weight: bold;
    

`

const NavigationButtonHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 3vw;


`

const NavigationElement = styled.button`

    padding: 0.75w;
    background-color: orange;
    border: none;
    font-size: 1.5vw;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 0.5vw;






`
export default Navbar

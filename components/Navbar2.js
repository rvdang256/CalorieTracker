import React from 'react';
import styled from 'styled-components';

const Navbar2 = () => {
  return (
    <Container>
      <Holder>
        <LogoBox>
          Fitness<span>Journey</span>
        </LogoBox>

        <NavigationButtonHolder>
          <NavigationElement>Home</NavigationElement>
          <NavigationElement>Exercises</NavigationElement>
          <NavigationElement>Community</NavigationElement>
          <LoginButton>Login</LoginButton>
        </NavigationButtonHolder>
        
      </Holder>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
  background-color: #f5f5f5; /* Light gray background */
`;

const Holder = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  font-size: 2vw;
  font-weight: bold;
  font-family: "Inter",Helvetica,Arial,-apple-system,sans-serif;
  color: #333; /* Dark gray text color */
  span {
    color: #12a9e0; /* Blue background color */ /* Blue text color */
  }
`;

const NavigationButtonHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 3vw;

`;

const NavigationElement = styled.button`
  padding: 0.5vw; /* Adjusted padding */
  font-family: "Gill Sans", sans-serif;
  background-color: #f28824; /* Green background color */
  border: none;
  font-size:    1vw;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 0.5vw;
  color: white; /* White text color */
  &:hover {
    background-color: #388e3c; /* Darker green on hover */
  }
`;

const LoginButton = styled.button`
  padding: 0.75vw ; /* Adjusted padding */
  background-color: #2196f3; /* Blue background color */
  font-family: "Gill Sans", sans-serif;
  border: none;
  font-size: 1.25vw;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 1.5vw; /* Increased border-radius for more rounded corners */
  color: white; /* White text color */
  &:hover {
    background-color: #0e82d1; /* Darker blue on hover */
  }
`;

export default Navbar2;

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const Navbar2 = () => {
  const router = useRouter();

  function handleLoginClick() {
    router.push('/login');
  }

  function handleHomeClick() {
    router.push('/');

  }

  function handleExerciseClick() {
    router.push('/Exercises');
  }

  function handleNutritionClick() {
    router.push('/Nutrition');

  }

  return (
    <Container>
      <Holder>
        <LogoBox>
          Fitness<span>Journey</span>
        </LogoBox>

        <NavigationButtonHolder>
          <NavigationElement onClick={handleHomeClick}>Home</NavigationElement>
          <NavigationElement onClick={handleExerciseClick}>Exercises</NavigationElement>
          <NavigationElement onClick={handleNutritionClick}>Nutrition</NavigationElement>
          <LoginButton onClick={handleLoginClick}>Login</LoginButton>
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
  background-color: #f28824; /* Orange background color */
  border: none;
  font-size:    1vw;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 0.5vw;
  color: white; /* White text color */
  &:hover {
    background-color: #b6691d; /* Darker orange on hover */
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

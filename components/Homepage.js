import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/router';




const Homepage = () => {
  const router = useRouter();

  const {user} = useStateContext();
  //Either go to the login page or the exercises page if the user is logged in
  function handleButtonClick() {
    if (user != null) {
      router.push('/Exercises');
    }else{
    router.push('/loginPage');
  }

}

  return (
    <Container>
        <MainSection>
        

            <MainContent>
            <MainTitle>Start Your Journey Today</MainTitle>
            <Subtitle>Join our community and reach your fitness goals</Subtitle>
            <CustomButton onClick={handleButtonClick}>Get Started</CustomButton>
            </MainContent>
            <MainImage src="/fitness.jpg" alt="Fitness Journey" />

        </MainSection>

      
    </Container>
  );
};




const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  width: 100vw;
  font-family: "Gill Sans", sans-serif;
`;




const MainSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 50px;
  font-family: "Gill Sans", sans-serif;
  background-color: #f5ce58;
`;

const MainImage = styled.img`
  flex: 1;
  max-width: 50%;
  max-length: 50%;
  border-radius: 10px;

`;

const MainContent = styled.div`
  flex: 1;
  padding: 0 40px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
`;


const CustomButton = styled.button`
  --border: 5px;    /* the border width */
  --slant: 0.7em;   /* control the slanted corners */
  --color: #0e82d1; /* the color */
  
  font-size: 35px;
  padding: 0.4em 1.2em;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: var(--color);
  background: 
     linear-gradient(to bottom left, var(--color) 50%, #0000 50.1%) top right,
     linear-gradient(to top right, var(--color) 50%, #0000 50.1%) bottom left;
  background-size: calc(var(--slant) + 1.3 * var(--border)) calc(var(--slant) + 1.3 * var(--border));
  background-repeat: no-repeat;
  box-shadow:
    0 0 0 200px inset var(--s, #0000),
    0 0 0 var(--border) inset var(--color);
  clip-path: 
      polygon(0 0, calc(100% - var(--slant)) 0, 100% var(--slant),
              100% 100%, var(--slant) 100%, 0 calc(100% - var(--slant))
             );
  transition: color var(--t, 0.3s), background-size 0.3s;

  &:focus-visible {
    outline-offset: calc(-1 * var(--border));
    outline: var(--border) solid #000c;
    clip-path: none;
    background-size: 0 0;
  }

  &:hover,
  &:active {
    background-size: 100% 100%;
    color: #fff;
    --t: 0.2s 0.1s;
  }

  &:active {
    --s: #0005;
    transition: none;
  }
`;

export default Homepage;

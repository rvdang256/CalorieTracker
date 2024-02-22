import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/router';




const Homepage = () => {
  const router = useRouter();

  const {user} = useStateContext();
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
            <MainButton onClick={handleButtonClick}>Get Started</MainButton>
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

const MainButton = styled.button`
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0e82d1;
  }
  background-color: #2196f3; /* Blue background color */
  font-family: "Gill Sans", sans-serif;
`;



export default Homepage;

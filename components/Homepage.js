import React from 'react';
import styled from 'styled-components';





const Homepage = () => {
  return (
    <Container>
        <MainSection>
        

            <MainContent>
            <MainTitle>Start Your Journey Today</MainTitle>
            <Subtitle>Join our community and reach your fitness goals</Subtitle>
            <MainButton>Get Started</MainButton>
            </MainContent>
            <MainImage src="/weights.jpg" alt="Fitness Journey" />

      </MainSection>

      
    </Container>
  );
};


const Header = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center; /* Horizontally center items */
  align-items: center; 
  margin-top: 80px;
  margin-bottom: 80px;
  width: 100vw;
  font-size: 36px;
  background-color: #f5ce58;

`;

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
  background-color: #4caf50;
  color: #fff;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #388e3c;
  }
  background-color: #2196f3; /* Blue background color */
  font-family: "Gill Sans", sans-serif;
`;

const FeaturesSection = styled.section`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  background-color: #f5ce58;
  margin: auto;
`;

const Feature = styled.div`
  flex: 1;
  text-align: center;
`;

const FeatureIcon = styled.img`
  max-width: 50%;
  max-length: 50%;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-top: 20px;
`;

const FeatureDescription = styled.p`
  color: #666;
  margin-top: 10px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 50px;
`;

const FooterText = styled.p`
  color: #666;
`;

const Caption = styled.figcaption`
    color: red;
    position: absolute;


`

export default Homepage;

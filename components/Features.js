import React from 'react'
import styled from 'styled-components'


const Features = () => {
  return (
    <Container>
      <Header> What we Offer</Header>
      <FeaturesSection>

        <Feature>
          <FeatureIcon src="/weights.jpg" />
          <FeatureTitle>Personalized Workouts</FeatureTitle>
          <FeatureDescription>Get recommended workout plans tailored to your goals</FeatureDescription>
        </Feature>

        
        <Feature>
          <FeatureIcon src="/foodScale.jpg"/>
          <FeatureTitle>Food Tracker</FeatureTitle>
          <FeatureDescription>Keep track of your daily calories and macro-nutrients</FeatureDescription>
        </Feature>
      </FeaturesSection>
    </Container>
  );
};

const Header = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center; /* Horizontally center items */
  align-items: center; 
  margin-top: 40px;
  margin-bottom: 40px;
  width: 100vw;
  font-size: 36px;
  

`;

const Container = styled.div`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  width: 100vw;
  font-family: "Gill Sans", sans-serif;
`;






const FeaturesSection = styled.section`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  margin: auto;
  padding-bottom: 50px;
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







export default Features;
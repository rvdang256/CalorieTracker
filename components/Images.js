import React from 'react'
import styled from 'styled-components'


const Images = () => {
  return (
    <Container>
      <Header> What we Offer</Header>
      <FeaturesSection>

        <Feature>
          <FeatureIcon src="/weights.jpg" alt="Icon 1" />
          <FeatureTitle>Personalized Workouts</FeatureTitle>
          <FeatureDescription>Create custom workout plans tailored to your goals</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon src="/salad.jpg" alt="Icon 2" />
          <FeatureTitle>Nutritional Guidance</FeatureTitle>
          <FeatureDescription>Access to nutrition plans and healthy recipes</FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon src="/foodScale.jpg" alt="Icon 3" />
          <FeatureTitle>Food Tracker</FeatureTitle>
          <FeatureDescription>Keep track of your daily calories and macro-nutrients</FeatureDescription>
        </Feature>
      </FeaturesSection>
      <Footer>
        <FooterText>© 2024 Fitness Journey. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

const Header = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center; /* Horizontally center items */
  align-items: center; 
  margin-top: 60px;
  margin-bottom: 80px;
  width: 100vw;
  font-size: 36px;

`;

const Container = styled.div`
  max-width: 1200px;
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





export default Images;
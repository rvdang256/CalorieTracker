import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [calorie, setCalorie] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);
    const [fiber, setFiber] = useState(0);
  

    async function fetchData() {
        const options = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {
            query: searchText
        },
        headers: {
            'X-RapidAPI-Key': 'f444a7a15fmshf34e2ddf0108b86p114cabjsn88bcab9ad8e4',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            setCalorie(calorie + response.data[0].calories);
            setProtein(protein + response.data[0].protein_g);
            setFat(fat + response.data[0].fat_total_g);
            setFiber(fiber + response.data[0].fiber_g);
            setSugar(sugar + response.data[0].sugar_g);
            console.log(response.data[0]);
        } catch (error) {
            console.error(error);
        }
    }
    

    
  
    return (
        <Container>
          <Heading>Calorie Counter</Heading>
          <SearchWrapper>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchButton onClick={fetchData}>Search</SearchButton>
          </SearchWrapper>
          <LoginForm>
            calorie: {calorie.toFixed(1)}
            fat: {fat.toFixed(1)}
            protein: {protein.toFixed(1)}
            sugar: {sugar.toFixed(1)}
            fiber: {fiber.toFixed(1)}
          </LoginForm>
        </Container>
      );
    };
    
    const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;
    
    const Heading = styled.h1`
      font-size: 24px;
      margin-bottom: 20px;
    `;
    
    //Spaces out all the componesnts near the search bar
    const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px; /* Add margin bottom to create space between SearchWrapper and LoginForm */
`;

    
    const SearchInput = styled.input`
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    `;
    
    const SearchButton = styled.button`
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
      margin-left: 10px;
    
      &:hover {
        background-color: #0056b3;
      }
    `;
    
   
const LoginForm = styled.form`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(5, 5, 5, 1);
    padding: 40px;
    width: 350px;
    height: 220px;
    align-items: center;
    margin-left: 20px; /* Add margin left to create space between SearchWrapper and LoginForm */
`;
    export default SearchBar;
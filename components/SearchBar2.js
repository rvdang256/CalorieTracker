import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

const SearchBar2 = () => {
    const[exercise, setExercise] = useState('');
    const[data, setData] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);
    


    async function fetchData() {
        setExercise(document.getElementById("dropdown").value);
        const options = {
        method: 'GET',
        url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
        params: {muscle: exercise},
        headers: {
          'X-RapidAPI-Key': 'f444a7a15fmshf34e2ddf0108b86p114cabjsn88bcab9ad8e4',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);            
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    

    
  
    return (
        <Container>
          <Heading>Calorie Counter</Heading>
          <SearchWrapper>
            <DropdownMenu id = "dropdown">
              <Option value="chest">Chest</Option>
              <Option value="triceps">Triceps</Option>
              <Option value="quadriceps">Quads</Option>
              <Option value="lower_back">Lower Back</Option>
              <Option value="upper_back">Upper Back</Option>
              <Option value="biceps">Biceps</Option>
              <Option value="abdominals">Abs</Option>
              <Option value="calves">Calves</Option>
            </DropdownMenu>
            <SearchButton onClick={fetchData}>Search</SearchButton>
          </SearchWrapper>
            <LoginForm>
            {data && !selectedExercise && (
                <List>
                  {data.slice(0, 5).map((exercise, index) => (
                    <ListItem key={index} onClick={() => setSelectedExercise(exercise)}>
                      {exercise.name}
                    </ListItem>
                  ))}
                </List>
              )}

            {selectedExercise && (<><><div>{selectedExercise.name}</div>

           
            </>
            <BackButton onClick={() => setSelectedExercise("")}> Back </BackButton></>
            )

              }          
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

    const BackButton = styled.h1`

      font-size: 54px;
      margin-top: 150px;
    
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

const DropdownMenu = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Option = styled.option`
  padding: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;



const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


export default SearchBar2;
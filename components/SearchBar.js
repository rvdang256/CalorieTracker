import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { database } from '@/library/firebaseConfig';
import {collection, doc, getDoc, setDoc} from 'firebase/firestore';


const SearchBar = () => {


    const [inputText, setInputText] = useState('');
    const [foodArray, setFoodArray] = useState([]);
    const [calorie, setCalorie] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [sugar, setSugar] = useState(0);
    const [fiber, setFiber] = useState(0);
    const [sodium, setSodium] = useState(0);
    const [showHistory, setShowHistory] = useState(false);

    const foodCollectionRef = collection(database, "test");
    const docRef = doc(foodCollectionRef, "rvd5465@psu.edu");


    function Test12(){
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      }

    async function fetchData() {
        const options = {
        method: 'GET',
        url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
        params: {
            query: inputText
        },
        headers: {
            'X-RapidAPI-Key': 'f444a7a15fmshf34e2ddf0108b86p114cabjsn88bcab9ad8e4',
            'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            if (response.data.length != 0) {
              setFoodArray([...foodArray, inputText]);
            }

            setCalorie(calorie + response.data[0].calories);
            setSodium(sodium + response.data[0].sodium_mg);
            setProtein(protein + response.data[0].protein_g);
            setFat(fat + response.data[0].fat_total_g);
            setFiber(fiber + response.data[0].fiber_g);
            setSugar(sugar + response.data[0].sugar_g);

        } catch (error) {
            console.error(error);
        }
    }
  
    return (
        <Container>
          <Heading>Nutrition Calculator</Heading>
          <Subtitle>Enter a food item to get its nutrition information</Subtitle>
          <SearchWrapper>
            <SearchInput
              placeholder="Type..."
              onChange={(e) => setInputText(e.target.value)}
            />
            <SearchButton onClick={fetchData}>Enter</SearchButton>
            <SearchButton onClick={() => setShowHistory(!showHistory)}>Show Food Entries</SearchButton>
            <SearchButton onClick={Test12}>Test</SearchButton>
          </SearchWrapper>
          <ListDisplay>
            {showHistory ? 
            <>
              {foodArray.map((food, index) => (
                 <ListItem key={index}>{food}</ListItem>
              ))}
              
            </>
            : // If showHistory is false, display the foodArray
            <List>
              <ListItem>Total Calories: {calorie.toFixed(1)}</ListItem>
              <ListItem>Total Fat (g): {fat.toFixed(1)}</ListItem>
              <ListItem>Total Protein (g): {protein.toFixed(1)}</ListItem>
              <ListItem>Total Sodium (mg): {sodium.toFixed(1)}</ListItem>
              <ListItem>Total Fiber (g): {fiber.toFixed(1)}</ListItem>
              <ListItem>Total Sugar (g): {sugar.toFixed(1)}</ListItem>
            </List>
            }

          </ListDisplay>
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
      font-family: "Gill Sans", sans-serif;
    `;
    
    //Spaces out all the componesnts near the search bar
    const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px; 
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
    
   
const ListDisplay = styled.form`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(5, 5, 5, 1);
    padding: 40px;
    width: 350px;
    height: 280px;
    align-items: center;
    margin-left: 20px; /* Add margin left to create space between SearchWrapper and LoginForm */
    overflow: auto; /* Add overflow property for scrollability */
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
  letter-spacing: 1px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;


const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;




const ListItem = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



  export default SearchBar;
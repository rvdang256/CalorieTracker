import React from 'react';
import styled from 'styled-components';
import {auth} from '@/library/firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';



const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  function handleSignUpClick() {

    if (email === '' || password === '') {
      alert('Email and Password cannot be empty')
      return;
    }else{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log(`User ${user.email} is signed in up`)
      router.push('/loginPage');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      alert("Email already in use")
    });

  }
}
  return (
    <Container>
      <SignForm>
        <Title>Sign Up</Title>
          <Input placeholder ="First Name"/>
          <Input placeholder ="Last Name" />
          <Input placeholder ="Email" onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder ="Password" type = "password" onChange={(e) => setPassword(e.target.value)}/>


        
        <SubmitButton onClick={handleSignUpClick}> Sign Up</SubmitButton>

      </SignForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-family: "Gill Sans", sans-serif;
`;

const SignForm = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(5, 5, 5, 1);
  padding: 40px;
  width: 350px;
  height: 320px;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;


const Input = styled.input`
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin-bottom: 20px;
  align-items: center;
  
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 1.5vw;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


export default SignUpForm;
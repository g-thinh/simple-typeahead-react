import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar";
import { fruits } from "./data";

function App() {
  return (
    <>
      <Wrapper>
        <Header>
          <Title>Simple Typeahead Bar</Title>
          <Subheader>Think of a fruit, any fruit 😀</Subheader>
          <SearchBar data={fruits} />
        </Header>
        <Footer>
          Made by
          <a
            href="https://giathinhnguyen.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Gia Thinh Nguyen
          </a>
        </Footer>
      </Wrapper>
      <GlobalStyles />
    </>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Subheader = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  font-weight: 100;
  margin: 2rem;
`;

const Footer = styled.div`
  margin: 10vh;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  & a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-weight: bold;
  }
`;

export default App;

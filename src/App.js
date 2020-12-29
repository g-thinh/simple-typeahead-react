import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar";
import ExpandedSearchBar from "./components/ExpandedSearchBar";
import { isBrowser, isMobile } from "react-device-detect";
import { fruits } from "./data";

function App() {
  const [choice, setChoice] = React.useState(false);

  return (
    <>
      <Wrapper>
        <Header>
          {isBrowser && (
            <>
              <Title>Simple Typeahead Bar</Title>
              <Subheader>Think of a fruit, any fruit 😀</Subheader>
              <Button onClick={() => setChoice(!choice)}>
                {choice ? "Persistent" : "Expandable"}
              </Button>
            </>
          )}
          {choice ? (
            <SearchBar data={fruits} show={false} />
          ) : (
            <ExpandedSearchBar />
          )}
        </Header>
        <Footer>
          {isMobile && (
            <>
              <Title>Simple Typeahead Bar</Title>
              <Subheader>Think of a fruit, any fruit 😀</Subheader>
              <Button onClick={() => setChoice(!choice)}>
                {choice ? "Persistent" : "Expandable"}
              </Button>
            </>
          )}
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

const Button = styled.button`
  text-align: center;
  width: auto;
  height: auto;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  background-color: hsla(200deg, 100%, 65%, 0.7);

  border: 1px solid hsla(200deg, 100%, 65%, 0.7);

  box-shadow: 1px 2px 5px 0px rgba(145, 145, 145, 0.7);

  border-radius: 12px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

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
  justify-content: center;
  align-items: center;
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
  width: 95%;
  margin: 5vh 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
    font-weight: bold;
  }
`;

export default App;

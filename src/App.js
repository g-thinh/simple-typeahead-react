import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExpandedSearchBar from "./components/ExpandedSearchBar";
import { isBrowser, isMobile } from "react-device-detect";
import { fruits } from "./data";

function App() {
  const [choice, setChoice] = React.useState(false);

  return (
    <Wrapper>
      {isBrowser && <Header />}
      <Content>
        {choice ? (
          <SearchBar data={fruits} show={false} />
        ) : (
          <ExpandedSearchBar />
        )}
      </Content>
      <Button onClick={() => setChoice(!choice)}>
        {choice ? "Persistent" : "Expandable"}
      </Button>
      {isMobile && <Header />}
      <Footer />
      <GlobalStyles />
    </Wrapper>
  );
}

const Button = styled.button`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 12rem;
  height: 4rem;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin: 2rem;
  background-color: hsla(200deg, 100%, 65%, 0.7);

  border: 1px solid hsla(200deg, 100%, 65%, 0.7);

  box-shadow: 1px 2px 5px 0px rgba(145, 145, 145, 0.7);

  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: hsla(200deg, 100%, 60%, 0.7);
  }
`;

const Content = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  align-items: center;
  margin: auto;
`;

const Wrapper = styled.div`
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default App;

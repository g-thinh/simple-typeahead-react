import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { fruits } from "../data";
import { FiMenu, FiSearch, FiMoreVertical } from "react-icons/fi";

const ExpandedSearchBar = () => {
  const [showBar, setShowBar] = React.useState(false);

  function handleShow() {
    setShowBar(false);
  }

  return (
    <Wrapper>
      {showBar ? (
        <BarContainer>
          <SearchBar data={fruits} show handleShow={handleShow} />
        </BarContainer>
      ) : (
        <>
          <Left>
            <button>
              <FiMenu size={26} />
            </button>
            <h1>Home</h1>
          </Left>
          <Right>
            <button onClick={() => setShowBar(true)}>
              <FiSearch size={26} />
            </button>
            <button>
              <FiMoreVertical size={26} />
            </button>
          </Right>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(145, 145, 145, 0.5);
  padding: 1.25rem 1rem;
  box-shadow: 0px 4px 5px 0px rgba(145, 145, 145, 0.7);
`;

const BarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  padding: 0.5rem 0;
  height: 3.25rem;

  & h1 {
    margin-left: 2rem;
    font-size: 1.3rem;
  }

  & button {
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
`;

const Right = styled.div`
  flex: 8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0;
  height: 3.25rem;
  /* border: 1px solid green; */

  & button {
    border: none;
    outline: none;
    cursor: pointer;
    background: transparent;
  }
`;

export default ExpandedSearchBar;

import React from "react";
import styled from "styled-components";
import { FiSearch, FiArrowLeft } from "react-icons/fi";

const SearchBar = ({ data, show, handleShow }) => {
  const SUGGESTIONS = data;
  const [value, setValue] = React.useState("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [isTyping, setIsTyping] = React.useState(show);
  const [suggestionIndex, setSuggestionIndex] = React.useState(0);

  let matchedSuggestions = SUGGESTIONS.filter((suggestion) =>
    suggestion.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );

  // show suggestions after 2 letters
  let showSuggestions =
    matchedSuggestions.length > 0 && isVisible && value.length > 0;

  function handleChange(ev) {
    setValue(ev.target.value);
    if (ev.target.value.length > 0) {
      setIsVisible(true);
      setIsTyping(true);
    } else {
      setIsVisible(false);
      setIsTyping(false);
    }
  }

  function handleClear(ev) {
    ev.preventDefault();
    setValue("");
    setIsVisible(false);
    setIsTyping(false);

    if (show) {
      handleShow();
      setIsTyping(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for... ${value}`);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <SearchField>
          {!isTyping ? (
            <Button type="submit">
              <FiSearch size={24} color="lightgrey" />
            </Button>
          ) : (
            <Button type="button" onClick={(ev) => handleClear(ev)}>
              <FiArrowLeft size={24} color="lightgrey" />
            </Button>
          )}

          <Input
            type="search"
            placeholder="Search..."
            onChange={(ev) => handleChange(ev)}
            value={value}
            onFocus={() => setIsVisible(true)}
            isMatching={showSuggestions}
          />
        </SearchField>
        {showSuggestions && (
          <SearchResults>
            <Divider />
            {matchedSuggestions.map((match, index) => {
              const isSelected = suggestionIndex === index;
              const matchIndex = match
                .toLocaleLowerCase()
                .indexOf(value.toLocaleLowerCase());

              return (
                value !== match && (
                  <SearchResultItem
                    isSelected={isSelected}
                    key={index}
                    onMouseEnter={() => setSuggestionIndex(index)}
                    onClick={() => setValue(match)}
                  >
                    <p>
                      {match.slice(0, matchIndex + value.length)}
                      <Bold>{match.slice(matchIndex + value.length)}</Bold>
                    </p>
                  </SearchResultItem>
                )
              );
            })}
          </SearchResults>
        )}
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  /* padding: 0.25rem; */
`;

const SearchField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;

  @media (min-width: 1200px) {
    width: 30rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #ffffff;

  outline: none;
  border: 1px solid rgba(145, 145, 145, 0.5);
  border-radius: 15px;
  &:hover,
  :focus-within {
    box-shadow: 1px 1px 2px 1px rgba(145, 145, 145, 0.7);
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 1.3rem;
  line-height: 1.6;
  outline: none;
  border: none;
  width: 100%;
  /* margin-left: 0.5rem; */
  &::placeholder {
    opacity: 0.5;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const SearchResults = styled.ul`
  display: block;
  background: white;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.3rem 0;
  background-color: rgba(145, 145, 145, 0.2);
`;

const SearchResultItem = styled.li`
  padding: 0.3rem 2rem;
  cursor: pointer;
  background: ${(props) =>
    props.isSelected ? "hsla(200deg, 100%, 65%, 0.25)" : "transparent"};
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default SearchBar;

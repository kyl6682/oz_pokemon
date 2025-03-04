import React from "react";
import { useEffect } from "react";
import "./App.scss";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { Link, Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
  }

  body {
      box-sizing: border-box;
  }
  h1 {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <StyledNav>
        <Link to="/">메인</Link>
        <Link to="/detail/1">상세 정보</Link>
        <Link to="/search">검색</Link>
        <Link to="/favorite">찜</Link>
      </StyledNav>
      <StyledMain>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:pokemonId" element={<Detail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </StyledMain>
    </>
  );
}

export default App;

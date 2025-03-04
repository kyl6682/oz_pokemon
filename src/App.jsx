import React from "react";
import { lazy, useEffect, Suspense } from "react";
import "./App.scss";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      font-family: 'NeoDunggeunmo';
  }

  body {
      box-sizing: border-box;
      width: 100vw;
  }
  h1 {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    border-top: 30px solid red;
    background-color:  black;
    color: white;
    width: 100vw;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 32px 160px;
  border-bottom: 5px solid black;
  input {
    border-bottom: 1px solid #a7a7a7;
  }
`;

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 32px 160px;
  background-color: #aaaaaa;
  height: 100vh;
  overflow: scroll;
`;

function App() {
  const navigate = useNavigate();
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
        <Link to="/favorite">찜</Link>
        <input
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
        />
        <span>🔍</span>
      </StyledNav>
      <StyledMain>
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:pokemonId" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </Suspense>
      </StyledMain>
    </>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import {useState} from 'react'
import { memo } from "react";

const CardContainer = styled.section`
    width: 150px;
    height: 180px;
    border: 1px solid #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 7px;
    cursor: pointer;
    img {
        width: 120px;
    }
`

export const Card = memo(({pokemon}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    const navigate = useNavigate()
    return (        
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isImageLoading ? <div style={{width: '120px'}}>로딩중...</div> : null}
            <img onLoad={() => setIsImageLoading(false)} src={pokemon.front} style={{display:isImageLoading ? 'none' : 'block'}}/>
            <div>{pokemon.name}<FavoriteButton pokemonId={pokemon.id}/></div>
        </CardContainer>)
})
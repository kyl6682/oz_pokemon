import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  h3 {
    font-size: 2rem;
  }
  img {
    width: 200px;
  }
`;

export default function Detail() {
  const { pokemonId } = useParams();
  const { data, loading } = useSelector((state) => state.pokemon);

  if (loading) {
    return <div>전체 포켓몬 데이터를 불러오는 중입니다...</div>;
  }

  const pokemon = data.find((el) => el.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <DetailContainer>
      <h3>{pokemon.name}</h3>
      <div>{pokemon.description}</div>
      <img src={pokemon.front} alt={pokemon.name} />
    </DetailContainer>
  );
}

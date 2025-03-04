import { Card } from "../component/Card";
import { selectFabirotePokemons } from "../RTK/selector";
import { useSelector } from "react-redux";

export default function Favorite() {
  const pokemon = useSelector(selectFabirotePokemons);
  return (
    <>
          {pokemon.map((el) => (
            <Card key={el.id} pokemon={el}/>
          ))}
    </>
  );
}

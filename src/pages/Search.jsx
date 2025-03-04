import { useSearchParams } from "react-router-dom";
import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../component/Card";


export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  console.log(param);
  const reg = getRegExp(param);

  const pokemon = useSelector(selectPokemonByRegExp(reg));
  console.log(pokemon);

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}{" "}
    </>
  );
}

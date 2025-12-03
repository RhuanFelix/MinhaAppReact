import InstituicoesEnsinoRankingCard from "../InstituicoesEnsinoRankingCard/InstituicoesEnsinoRankingCard.jsx";
import CarrosselImagens from "../CarrosselImagens/CarrosselImagens.jsx"
import ranking from "../../datasets/matriculas_pb.json";
import "./main.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Main = () => {

  let [incrementar, setIncrementar] = useState(0);

  const incrementarHandleClick = () => {
    setIncrementar(++incrementar);
  }
  return (
    <main>
      {/* Carrossel de imagens */}
      <CarrosselImagens/>

      {/* Cartões da IE */}
      <InstituicoesEnsinoRankingCard ranking={ranking}/>

      {incrementar}<br/>

      <Button onClick={incrementarHandleClick}>Adicionar</Button>
    </main>
  )
}

export default Main
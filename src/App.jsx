import Citacao from "./components/Citacao";
import citacoes from "./data"; //aqui vem meus dados ficticios

import { useState } from "react";

function App() {
  const [indice, setIndice] = useState(0);


  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length);
  };

  return (
    <>
    <p>{citacoes[indice].texto}</p>
    <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima citação</button>

    </>
  );
}

export default App

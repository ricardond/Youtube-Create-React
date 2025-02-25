import { useState } from "react";

export default function App(){
  const [contador, setContador] = useState(1);

  function AddContador(){
      setContador(contador + 1);
  }

  return(
    <div>
      <div>{contador}</div>
      <button onClick={AddContador}>Adicionar</button>
    </div>
  )
}
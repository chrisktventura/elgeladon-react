import "./PaletaLista.css";
import { paletas } from "mocks/paletas";
import { useState } from "react";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";

function PaletaLista() {
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
  
  const onAdd = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1,
    };
    setPaletaSelecionada({...paletaSelecionada, ...paleta});
  };

  const onRemove = (paletaIndex) => {
    const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) -1 }
    setPaletaSelecionada({...paletaSelecionada, ...paleta});
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
           key={`PaletaListaItem-${index}`}
           paleta={paleta}
           quantidadeSelecionada={paletaSelecionada[index]}
           index={index}
           onRemove={index => onRemove(index)}
           onAdd={index => onAdd(index)}
           />
      ))}
    </div>
  );
}

export default PaletaLista;

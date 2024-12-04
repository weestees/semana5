import React from "react";
import { Link } from "react-router-dom";

const ItemRestaurante = ({ id, nombre, horario, tipo, url, handleEliminar }) => {
  return (
    <div>
      <h3>Id: {id}</h3>
      <h3>{nombre}</h3>
      <p>Tipo de comida: {tipo}</p>
      <p>Horario: {horario}</p>
      <img src={url} alt={`Imagen de ${nombre}`} />
      <div>
        <Link to={`/item/`+id}>Detalle</Link>
      </div>
    </div>
  );
};

export default ItemRestaurante;

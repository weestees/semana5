import React from "react";
import axios from "axios";
import { useParams, Link} from "react-router-dom";
import { useState, useEffect } from "react";

const DetalleResturante = () => {
    const [restaurante, setRestaurante] = useState([]); // Estado para almacenar la lista de restaurantes
    const { id } = useParams();
    useEffect(() => {

 
        axios.get('http://localhost:3001/restaurantes/'+id)
          .then(response => { 
            console.log('Datos obtenidos:', response.data);
            setRestaurante(response.data); // Actualiza el estado con los datos obtenidos
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
    }, []); // La dependencia vacía asegura que solo se ejecute una vez al montar

  return (
    <div>
      <h3>Id: {restaurante.id}</h3>
      <h3>{restaurante.nombre}</h3>
      <p>Tipo de comida: {restaurante.tipo}</p>
      <p>Horario: {restaurante.horario}</p>
      <img src={restaurante.url} alt={`Imagen de ${restaurante.nombre}`} />
      <div>
      <button><Link to={ '/update/'+ id}> Editar </Link></button>
      </div>
    </div>
  );
};

export default DetalleResturante;
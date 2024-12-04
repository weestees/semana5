import React from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const DetalleResturante = ({ setRestaurantes }) => {
  const [restaurante, setRestaurante] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/restaurantes/' + id)
      .then(response => {
        console.log('Datos obtenidos:', response.data);
        setRestaurante(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, [id]);

  const handleEliminar = (id) => {
    axios.delete(`http://localhost:3001/restaurantes/${id}`)
      .then(response => {
        console.log('Restaurante eliminado:', response.data);
        setRestaurantes(prevRestaurantes => prevRestaurantes.filter(restaurante => restaurante.id !== id));
        navigate('/');
      })
      .catch(error => {
        console.error('Error al eliminar el restaurante:', error);
      });
  };

  return (
    <div>
      <h3>Id: {restaurante.id}</h3>
      <h3>{restaurante.nombre}</h3>
      <p>Tipo de comida: {restaurante.tipo}</p>
      <p>Horario: {restaurante.horario}</p>
      <img src={restaurante.url} alt={`Imagen de ${restaurante.nombre}`} />
      <div>
        <button><Link to={'/update/' + id}> Editar </Link></button>
        <button onClick={() => handleEliminar(restaurante.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default DetalleResturante;
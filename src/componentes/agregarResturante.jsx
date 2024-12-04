import React, { useState } from 'react';
import axios from 'axios';

const AgregarRestaurante = ({ setRestaurantes }) => { //set resutaurantes es una funcion que se pasa como prop
  const [nuevoRestaurante, setNuevoRestaurante] = useState({
    nombre: '',
    horario: '',
    tipo: '',
    url: ''
  });

  const handleAggRes = (e) => {
    const { name, value } = e.target;
    setNuevoRestaurante({ ...nuevoRestaurante, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/restaurantes', nuevoRestaurante)
      .then(response => {
        console.log('Nuevo restaurante agregado:', response.data);
        setRestaurantes(prevRestaurantes => [...prevRestaurantes, response.data]);
        setNuevoRestaurante({ nombre: '', horario: '', tipo: '', url: '' });
      })
      .catch(error => {
        console.error('Error al agregar el restaurante:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h4>Ingresar nuevo restaurante</h4>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={nuevoRestaurante.nombre}
        onChange={handleAggRes}
        required
      />
      <input
        type="text"
        name="horario"
        placeholder="Horario"
        value={nuevoRestaurante.horario}
        onChange={handleAggRes}
        required
      />
      <input
        type="text"
        name="tipo"
        placeholder="Tipo"
        value={nuevoRestaurante.tipo}
        onChange={handleAggRes}
        required
      />
      <input
        type="text"
        name="url"
        placeholder="URL de la imagen"
        value={nuevoRestaurante.url}
        onChange={handleAggRes}
        required
      />
      <button type="submit" className="ingresar-nuevo">Ingresar nuevo</button>
    </form>
  );
};

export default AgregarRestaurante; 
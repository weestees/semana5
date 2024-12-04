import React, { useEffect, useState } from 'react';
import ItemRestaurante from './ItemRestaurante';
import { Link, useNavigate } from 'react-router-dom';

const ListaRestaurantes = ({ restaurantes, handleEliminar }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/addRestaurante');
  };

  return (
    <div>
      <button><Link to="/addRestaurante">Agregar Restaurante</Link></button>
      <button onClick={handleLogin}>Agregar Restaurante con useNavigate</button>
      <h3>Bienvenidos a ñanEC</h3>
      {restaurantes.map((rst, index) => (
        <ItemRestaurante
          key={index}
          id={rst.id}
          nombre={rst.nombre}
          horario={rst.horario}
          tipo={rst.tipo}
          url={rst.url}
          handleEliminar={handleEliminar}
        />
      ))}
    </div>
  );
};

export default ListaRestaurantes;
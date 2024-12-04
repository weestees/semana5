import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRestaurante = ({ setRestaurantes }) => { // Asegúrate de recibir setRestaurantes como prop
  const [nombre, setNombre] = useState('');
  const [horario, setHorario] = useState('');
  const [tipo, setTipo] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRestaurante = { nombre, horario, tipo, url };

    axios.post('http://localhost:3001/restaurantes', nuevoRestaurante)
      .then(response => {
        console.log('Nuevo restaurante agregado:', response.data);
        setRestaurantes(prevRestaurantes => [...prevRestaurantes, response.data]);
        setNombre('');
        setHorario('');
        setTipo('');
        setUrl('');
        navigate('/'); // Redirigir después de agregar el restaurante
      })
      .catch(error => {
        console.error('Error al agregar el restaurante:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Ingresar nuevo restaurante</h4>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </label>
      <label>
        Horario:
        <input type="text" value={horario} onChange={(e) => setHorario(e.target.value)} required />
      </label>
      <label>
        Tipo:
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
      </label>
      <label>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
      </label>
      <button type="submit" className="ingresar-nuevo">Ingresar nuevo</button>
    </form>
  );
};

export default AddRestaurante;
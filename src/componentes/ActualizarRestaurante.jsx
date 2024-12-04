import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ActualizarRestaurante = ({ setRestaurantes }) => {
    const [restaurante, setRestaurante] = useState({ nombre: '', horario: '', tipo: '', url: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/restaurantes/${id}`)
            .then(response => {
                setRestaurante(response.data);
            })
            .catch(error => {
                console.error('Error al obtener el restaurante:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurante(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/restaurantes/${id}`, restaurante)
            .then(response => {
                console.log('Restaurante actualizado:', response.data);
                setRestaurantes(prevRestaurantes => prevRestaurantes.map(rest => rest.id === id ? response.data : rest));
                navigate('/');
            })
            .catch(error => {
                console.error('Error al actualizar el restaurante:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Actualizar restaurante</h4>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={restaurante.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="horario"
                placeholder="Horario"
                value={restaurante.horario}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="tipo"
                placeholder="Tipo"
                value={restaurante.tipo}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="url"
                placeholder="URL de la imagen"
                value={restaurante.url}
                onChange={handleChange}
                required
            />
            <button type="submit" className="ingresar-nuevo">Actualizar</button>
        </form>
    );
};

export default ActualizarRestaurante;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemRestaurante from './componentes/ItemRestaurante';
import AddRestaurante from './componentes/AddRestaurante';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaRestaurantes from './componentes/listaRestaurantes';
import DetalleResturante from './componentes/DetalleRestaurante';
import ActualizarRestaurante from './componentes/ActualizarRestaurante';
import './App.css';


const App = () => {
  const [restaurantes, setRestaurantes] = useState([]); // Estado para almacenar la lista de restaurantes

  useEffect(() => {
    const cargarRestaurantes = () => { 
      axios.get('http://localhost:3001/restaurantes')
        .then(response => { 
          console.log('Datos obtenidos:', response.data);
          setRestaurantes(response.data); // Actualiza el estado con los datos obtenidos
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
    };

    cargarRestaurantes(); // Llama a la función al montar el componente
  }, []); // La dependencia vacía asegura que solo se ejecute una vez al montar

  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <ListaRestaurantes restaurantes = {restaurantes} />} />
          <Route path="/addRestaurante" element={ <AddRestaurante/> } />
          <Route path="/item/:id" element={ <DetalleResturante/> } />
          <Route path="/update/:id" element={ <ActualizarRestaurante setRestaurantes={setRestaurantes} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
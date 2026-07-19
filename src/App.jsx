import './App.css'
import { useState } from 'react'


function Pelicula({ titulo }) {
  const [completada, setCompletada] = useState(false);

  return (
    <div 
      style={{
        border: completada ? '1px solid #FFD700' : '1px solid black', 
        margin: '10px', 
        padding: '10px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out'
      }}
      onClick={() => setCompletada(!completada)}
    >
  
      <p 
        style={{ 
          margin: 0,
          color: completada ? '#FFD700' : 'inherit', 
          textShadow: completada ? '0 0 8px rgba(255, 215, 0, 0.6)' : 'none', 
          fontWeight: completada ? 'bold' : 'normal',
        }}
      >
        {titulo}
      </p>

      <span 
        style={{
          fontSize: '20px',
          color: completada ? '#FFD700' : '#ccc',
          textShadow: completada ? '0 0 8px #FFD700' : 'none',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        ★
      </span>
    </div>
  );
}



function App() {
  
  const [peliculas, setPeliculas] = useState(['Inception', 'Interstellar']);
  const [nuevaPelicula, setNuevaPelicula] = useState('');

  function agregarPelicula() {
    if (nuevaPelicula.trim() === '') {
      return;
    } else {
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula('');
    }
  }

  return (
    <div> 
      <h1>Mi lista de películas</h1>
      <div>
        <input 
          type="text" 
          value={nuevaPelicula} 
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Escribe una nueva película"
          style={{ flex: 1, padding: '10px' }}
        />
        
        <button onClick={agregarPelicula}>Agregar película</button>
      </div>

      {peliculas.map((pelicula, indice) => {
        return <Pelicula key={indice} titulo={pelicula} />
      })}

    </div>
  );
}

export default App
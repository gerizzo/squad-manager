import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './components/Jugadores';
import Titulares from './components/Titulares';
import ModalCargarJugadores from './components/ModalCargarJugadores';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);


  return (
    <Provider store={store}>
        <main>
          <h1>Squad Manager</h1>
          <section className='cargarJugadoresContainer'>
            <button className='buttonCargarJugador' onClick={handleOpenModal}>Cargar Jugador</button>
            <ModalCargarJugadores isOpen={isOpen} onClose={handleCloseModal}>
              <p>Contenido del modal...</p>
            </ModalCargarJugadores>

          </section>

          <Jugadores/>
          <Titulares/>
        </main>
      </Provider>
  );
}

export default App;

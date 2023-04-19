import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './components/Jugadores';
import Titulares from './components/Titulares';

function App() {
  return (
    <Provider store={store}>
        <main>
          <h1>Squad Manager</h1>
          <Jugadores/>
          <Titulares/>
        </main>
      </Provider>
  );
}

export default App;

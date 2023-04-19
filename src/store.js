import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Carlos Tevez",
        foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/InddelVal-Boca_%284%29.jpg/272px-InddelVal-Boca_%284%29.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState,action) => {
    return state
}

const store = configureStore({
    reducer: reducerEntrenador
})

export default store
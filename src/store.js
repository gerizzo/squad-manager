import {configureStore} from '@reduxjs/toolkit';

const initialState = {
    jugadores: [],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_JUGADOR':
            return {
                ...state,
                jugadores: [
                    ...state.jugadores,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

const store = configureStore({reducer: reducerEntrenador})

export default store

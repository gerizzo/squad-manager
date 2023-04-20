import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../style.css';

const ModalCargarJugadores = ({isOpen, onClose}) => {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [foto, setFoto] = useState(null);
    const [nombreError, setNombreError] = useState('');
    const [edadError, setEdadError] = useState('');
    
    const agregarJugador = (nuevoJugador) => {
        return {
            type: 'AGREGAR_JUGADOR',
            payload: nuevoJugador
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar campos
        let isValid = true;
        if (!nombre.trim() || /\d/.test(nombre)) {
            setNombreError('Nombre inválido');
            isValid = false;
        } else {
            setNombreError('');
        }
        if (!edad || isNaN(edad) || edad < 18 || edad > 40) {
            setEdadError('Edad inválida (debe ser un número entre 18 y 40)');
            isValid = false;
        } else {
            setEdadError('');
        }

        // Si los campos son válidos, agregar jugador
        if (isValid) {
            const nuevoJugador = {
                nombre,
                edad: Number(edad),
                foto
            };
            dispatch(agregarJugador(nuevoJugador));

            // Resetear campos
            setNombre('');
            setEdad('');
            setFoto(null);
            onClose();
        }
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    };

    const handleFotoChange = (event) => {
        setFoto(event.target.files[0]);
    };

    if(!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    X
                </button>
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nombre:
                            <input type="text" value={nombre} onChange={handleNombreChange} />
                            {nombreError && <span style={{ color: 'red' }}>{nombreError}</span>}
                        </label>
                        <br />
                        <label>
                            Edad:
                            <input type="text" value={edad} onChange={handleEdadChange} />
                            {edadError && <span style={{ color: 'red' }}>{edadError}</span>}
                        </label>
                        <br />
                        <label>
                            Foto:
                            <input type="file" onChange={handleFotoChange} />
                        </label>
                        <br />
                        <button type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalCargarJugadores;

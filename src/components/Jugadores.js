import React from 'react'
import { connect } from "react-redux";

const Jugadores = ({jugadores}) => {
  return (
    <div>
      <p>Jugadores</p>
      <div className='contenedor-jugadores'>
        {
          jugadores.map(j => (
            <article className='jugador' key={j.nombre}>
              <img src={j.foto} alt={j.nombre}/>
              <h3>{j.nombre}</h3>
              <div>
                <button>Titular</button>
                <button>Suplente</button>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({})


export default connect(mapStateToProps, mapDispatchToProps) (Jugadores)
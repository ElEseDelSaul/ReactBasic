import React, { Component } from 'react';
import './task.css';
import PropTypes from 'prop-types'; //Especificar el tipo de datos de los props

class Task extends Component {

    styleCompleted() {      //Funcion para estilizar -> Uso de condicionales ternarios
        return {
            color: this.props.task.done ? 'black' : 'yellow',
            background: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            border: 'solid'
        }
    }

    render() {

        const { id, title, description, done } = this.props.task;

        return <div style={this.styleCompleted()} className='task'>
            {id} -
            {title} -
            {description} -
            {done}
            <input
                type="checkbox"
                onChange={this.props.checkDone.bind(this, id)}
            />
            <button
                style={btnDelete}
                onClick={this.props.deleteTask.bind(this, id)}
            >X</button>
        </div>
    }
}

Task.propTypes = {  //Solicitar la llegada de un OBJETO en el componente
    task: PropTypes.object.isRequired
}

//Estilos en linea
const btnDelete = {     //Objeto de JS para estilizar
    fontSize: '18px',
    fontFamily: 'serif',
    background: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '10px 15px',
    cursor: 'pointer'
}

export default Task;
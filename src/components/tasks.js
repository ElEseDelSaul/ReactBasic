import React, { Component } from 'react';
import PropTypes from 'prop-types'; //Especificar el tipo de datos de los props

//SubComponente Task
import Task from './task';

class Tasks extends Component {
    render() {
        return this.props.tasks.map(task =>
            <Task
                task={task}
                key={task.id}
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            />);
    }
}

Tasks.propTypes = {     //Solicitar un ARRAY para este componente
    tasks: PropTypes.array.isRequired
}

export default Tasks;
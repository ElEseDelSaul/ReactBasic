import React,{Component} from 'react';

export default class TaskForm extends Component{

    state = {   //Estado del componente Form
        title : '',
        description : ''
    }

    Envio = (e) => {
        e.preventDefault(); // No recargar el Form
        //console.log(this.state)     //Ver el estado del componente
        this.props.addTask(this.state.title, this.state.description);   //Mandar data al Components App y ejecutar addTask
    }

    Cambio = e =>{    //Funcion reutilizable para los Inputs
        //console.log(e.target.name, e.target.value)    //Ver valores de los inputs
        this.setState({ //Cambiar el estado
            [e.target.name] : e.target.value  //Interpretar valores de los elementos del FROM
        })
    }

    render(){
        return(
            <form onSubmit={this.Envio}>
                <input 
                name="title"
                type="text" 
                onChange={this.Cambio} 
                value={this.state.title}
                placeholder="Write a Task"
                required>
                </input>
                <br/>
                <textarea 
                name="description"
                onChange={this.Cambio} 
                value={this.state.description} 
                placeholder="Description Task"
                required>
                </textarea>
                <br/>
                <input type="submit" value="Send" />
            </form>
        )
    }
}


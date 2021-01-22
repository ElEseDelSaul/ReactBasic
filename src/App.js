import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Datos hardcodeados
import tasks from './sample/tasks.json';
//console.log(tasks);

//Components
import Tasks from './components/tasks';
import TaskForm from './components/task-form';
import Posts from './components/Posts'

/* Props  => Parametro
function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      Helloudad {props.texto}
    </div>
  )
} */

//const App = () => <div> <HelloWorld texto="Saul"/> </div>  Funcion Flecha
/*    Clase
class App extends React.Component{
  render(){
    return <div> <HelloWorld texto="Goku"/> </div>
  }
}
*/

/*      MANEJO BASICO DEL ESTADO
class HelloWorld extends React.Component { //Props => Propiedad

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })  //Invertir el valor del state
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>Componente {this.props.subtitle}</h3>
          {this.props.texto}
          <button onClick={this.toggleShow}>Toggle State.</button>
        </div>
      )
    } else {
      return (
        <div>
          There are no elements.
          <button onClick={this.toggleShow}>ToggleState.</button>
        </div>
      )
    }
  }
}

function App() { //Funcion normal
  return (
    <div>
      <HelloWorld texto="Bulma" subtitle="lorem" />
      <HelloWorld texto="Gohan" subtitle="Component two" />
      <HelloWorld texto="Tronx" subtitle="Component Three" />
    </div>
  )
}
*/

class App extends React.Component {

  state = { //Definir datos que le pertenecen al componente
    tasks: tasks
  }

  AddTask = (title, description) => {
    //console.log(title,description)
    const newTask = { //Creacion de la nueva tarea
      id: this.state.tasks.length,
      title: title,
      description: description
    }
    this.setState({   //Modificar el estado del componente
      tasks: [...this.state.tasks, newTask]
    })
  }

  DeleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);  //Verificar la existencia de ese id
    //console.log(test) //Comprobando el nuevo arreglo
    this.setState({ tasks: newTasks })  //Generar nuevo arreglo 
  }

  CheckDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done; //Cambiar al valor opuesto del checkbox
      }
      return task;
    })
    console.log(newTasks)
    //Reflejar datos en el estado
    this.setState({ tasks: newTasks })
  }

  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact="/" render={() => {
          return <div>
            <TaskForm addTask={this.AddTask} />
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.DeleteTask}
              checkDone={this.CheckDone}
            />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
  }
}

export default App;
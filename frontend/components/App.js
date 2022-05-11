import React from 'react'
import axios from 'axios'

import Form from './Form'
import TodoList from './TodoList'


const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    taskList: []
  }

  componentDidMount() {
    axios.get(URL)
    .then(resp => {
      this.setState({
        taskList: resp.data.data
      })
    })
    .catch(err => console.log(err))
  }

  addTask = (evt, task) => {
    evt.preventDefault()
    const newTask = {
      id: Date.now(),
      name: task,
      completed: false
    }
    axios.post(URL, newTask)
    .then(resp => {
      this.setState({
        taskList: [...this.state.taskList, resp.data.data]
      })
    })
    .catch(err => console.log(err))
  }

  toggleTask = taskID => {
      axios.patch(`${URL}/${taskID}`, {completed: true})
      .then(() => {
        this.setState({
          taskList: this.state.taskList.map(task => {
            if (taskID === task.id) {
              return {
                ...task, completed: !task.completed
              }
            }
            return task
          })
        })
      })
      .catch(err => console.log(err))
  }


  clearCompleted = () => {
    this.setState({
      taskList: this.state.taskList.filter(task => !task.completed)
    })
  }


  render() {
    return (
      <div className="App">
        <TodoList 
          taskList={this.state.taskList}
          toggleTask={this.toggleTask}
          />
        <Form addTask={this.addTask}/>
        <button className="clearBtn" onClick={() => {this.clearCompleted()}}>Clear Completed</button>
      </div>
    )
  }
}

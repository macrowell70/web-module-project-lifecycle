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


  render() {
    return (
      <div className="App">
        <TodoList taskList={this.state.taskList} />
        <Form addTask={this.addTask}/>
        <button className="clearBtn">Clear Completed</button>
      </div>
    )
  }
}

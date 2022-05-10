import React from 'react'

export default class Form extends React.Component {
  state = {
    inputValue: ""
  }

  handleChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addTask(evt, this.state.inputValue)
    this.setState({
      inputValue: ""
    })
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="task"
            value={this.state.inputValue}
            onChange={this.handleChange}
            />
          <button className="submitBtn">Add Task</button>
        </form>
      </div>
    )
  }
}

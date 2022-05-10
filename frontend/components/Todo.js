import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo" onClick={() => this.props.toggleTask(this.props.task.id)}>
        <h3>{this.props.task.name}</h3>
      </div>
    )
  }
}

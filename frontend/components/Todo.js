import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="Todo">
        <h3>{this.props.task.name}</h3>
      </div>
    )
  }
}

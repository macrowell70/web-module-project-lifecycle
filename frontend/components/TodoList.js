import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { taskList } = this.props;
    

    return (
      <div className="taskList">
        {taskList.map(task => (
          <Todo 
            key={task.id}
            task={task}
          />
        ))}
      </div>
    )
  }
}

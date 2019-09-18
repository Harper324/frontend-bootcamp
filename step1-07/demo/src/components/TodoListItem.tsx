import React from 'react';
import { TodoListItemProps} from '../TodoApp.types';

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    const { label, completed, complete, id} = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => complete(id)} /> {label}
        </label>
      </li>
    );
  }
}

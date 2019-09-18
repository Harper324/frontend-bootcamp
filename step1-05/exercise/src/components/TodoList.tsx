import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component {
  render() {
    let todoList = [1, 2, 3, 4];
    return (
      <ul className="todos">
        {todoList.map(item=><TodoListItem/>)}
      </ul>
    );
  }
}

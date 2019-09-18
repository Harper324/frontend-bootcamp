import React from "react";

export class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo
        </label>
      </li>
    );
  }
}

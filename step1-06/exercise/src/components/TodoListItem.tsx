import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      completed: this.props.completed
    };
  }
  render() {
    const { label } = this.props;
    return (
      <li className="todo">
        <label>
          <input type="checkbox" onClick={this._onClick} /> {label}
        </label>
      </li>
    );
  }

  _onClick = evt => {
    this.setState({
      completed: !this.state.completed
    });
  };
}

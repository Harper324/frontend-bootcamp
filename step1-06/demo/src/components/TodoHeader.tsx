import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };

  render() {
    const { filter } = this.props;
    return (
      <header>
        <h1>todos <small>(1.6 demo)</small></h1>
        <div className="addTodo">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className={filter === "all" ? "selected" : " "}>all</button>
          <button className={filter === "active" ? "selected" : " "}>active</button>
          <button className={filter === "completed" ? "selected" : " "}>completed</button>
        </nav>
      </header>
    );
  }
}

import React from 'react';

export class TodoFooter extends React.Component {
  render() {
    return (  
      <footer>
        <span>4 items left</span>
        <button className="submit">Clear Completed</button>
      </footer>
    );
  }
}

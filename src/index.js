import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>Coucou</div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('mount-point'));
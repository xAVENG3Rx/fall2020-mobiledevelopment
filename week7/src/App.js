import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Counter: {this.state.counter}</p>
          <button className="button1" onClick={() => {this.setState({counter: this.state.counter +1})}}>+1</button>
          <button className="button2" onClick={() => {this.setState({counter: this.state.counter -1})}}>-1</button>
          <br></br>
          <button className="button3" onClick={() => {this.setState({counter: this.state.counter *0})}}>Reset</button>
        </header>
        <p>Created by Jonathan Montalvo Colon</p>
      </div>
    );
  }
}
export default App;

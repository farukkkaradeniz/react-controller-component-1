import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : ''
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      message : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something"  value={this.state.message} onChange={this.handleChange} />
          {
            this.state.message.length > 0 &&( // burada önemli olan && işareti ile jsx içinde if block kullanabilmek.
              <div>
                <p className="echo">Echo:{this.state.message}</p>
                <p>This should mirror the text you typed into the input field.</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;

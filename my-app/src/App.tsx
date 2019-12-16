import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  yourname?: string
}

type AppState = {
  count: number
}

class App extends React.Component<AppProps, AppState>{

  state: AppState = {
    count: 0
  }

  handleMinus = () => {
    this.setState({count: this.state.count - 1})
  }

  handlePlus = () => {
    this.setState( {count: this.state.count + 1} )
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.props.yourname}!
          </p>
          <button onClick={this.handlePlus }>+</button>
          {this.state.count}
          <button onClick={this.handleMinus }>-</button>
        </header>
      </div>
    );
  }
}

export default App;

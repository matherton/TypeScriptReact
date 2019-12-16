import React from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  yourname?: string
}

const App: React.FC<AppProps> = ({yourname = "yourname"}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {yourname}!
        </p>
        
      </header>
    </div>
  );
}

export default App;

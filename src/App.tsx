import React, {} from 'react';
// import logo from './logo.svg';
import './App.css';
// import {BrowserRouter, Link, Switch,Route} from "react-router-dom"
import Game, {} from "./letter-split"
import store from "./letter-split/store"
import {Provider} from "react-redux"

const App: React.FC = () =>
    (
        <Provider store={store}>
            <Game />
        </Provider>
        // <Menu/>
        // <Dialogs/>
    );
    /*(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
    );*/

export default App;

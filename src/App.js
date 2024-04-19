import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {
	Routes, Route, BrowserRouter, Navigate
} from "react-router-dom";

import { rutas } from './routes';

function App() {
	return (
	  <div className="App">
		<header className="App-header">
		  <img src={logo} className="App-logo" alt="logo" />
		  <p>
			Edit <code>src/App.js</code> and save to reload.
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
	);
  }

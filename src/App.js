import './App.css';
import 'semantic-ui-css/semantic.min.css'

import {
	Routes, Route, BrowserRouter
} from "react-router-dom";

import { rutas } from './routes';

function App() {
	//Algo
	return (
		<BrowserRouter>
			<Routes>
				{
					rutas.map(
						(ruta, indice) => {
							return (
								<Route 
									path={ruta.ruta} 
									key={indice}
									element={ruta.component}
									/>
							)
						}
					)

				}
			</Routes>
	  </BrowserRouter>
	);
}

export default App;

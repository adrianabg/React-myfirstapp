import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'; /*Estilos*/

import App from './App'; /*Se encarga de arrancar la aplicación*/
import * as serviceWorker from './serviceWorker'; /*Sirve para que la app funcione incluso sin conexión a internet*/

ReactDOM.render(<App />, document.getElementById('root')); /*Biblioteca de react en el navegador*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import {createRoot} from 'react-dom/client';
// import App from './App'
import App from './App'
import './index.css';



// React 18 syntax
const container = document.getElementById('root');
const root = createRoot(container);
  // Typescript syntax
  // const root = createRoot(container!)
root.render(<React.StrictMode> <App /> </React.StrictMode>);

// React 17 syntax
// ReactDOM.render(<App />, document.getElementById('root'))


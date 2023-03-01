import './scss/style.scss'
import App from './App.js'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<App />);




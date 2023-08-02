import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';

import App from './App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <PDFViewer height={1000} width={1800}>
      <App />
    </PDFViewer>
  </React.StrictMode>,
);

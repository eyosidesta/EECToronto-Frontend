import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import reportWebVitals from './reportWebVitals';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import AdminHome from './components/admin/AdminHome';
import Dashboard from './components/admin/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.path;
root.render(
    path === '/admin' ? <Dashboard /> : <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

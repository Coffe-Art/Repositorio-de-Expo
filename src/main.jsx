import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from '../src/Context/contextAuth.jsx';
import {EmpresaProvider} from '../src/Context/contextEmpresa.jsx'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <EmpresaProvider>
  <AuthProvider>
        <App />
    </AuthProvider>
    </EmpresaProvider>
)

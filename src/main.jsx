import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieRead from './contexts/MovieRead.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <MovieRead>
      <App />
    </MovieRead>
  </StrictMode>
)

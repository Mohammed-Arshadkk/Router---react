import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './Pages/Main'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
   <Main></Main>
 </BrowserRouter>
)

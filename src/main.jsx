import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
ReactDOM.createRoot(document.getElementById('root')).render(




 <BrowserRouter>
 
 
 <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
 <App />
 </ThemeProvider>
 </BrowserRouter>
)

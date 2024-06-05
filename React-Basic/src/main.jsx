import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const now = 'Now!'
const reactElement = React.createElement(
    'a',
    {
      href: 'www.google.com',
      target: '_blank'
    },
    'Visit Google',
    now
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  reactElement
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import moment from "moment"
import "moment/dist/locale/pt-br"

moment

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Records } from './pages/records/Records'
import { Timestamps } from './pages/timestamps/Timestamps'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Records /> */}
    <Timestamps />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Timestamps } from './pages/timestamps/Timestamps'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

import './index.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      {/* <Records /> */}
      <Timestamps />
    </ThemeProvider>
  </React.StrictMode>,
)

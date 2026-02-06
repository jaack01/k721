import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'
import Loader from './components/common/Loader.jsx'

const Root = () => {
  const [loading, setLoading] = useState(true)

  return (
    <React.StrictMode>
      <BrowserRouter>
        {loading && <Loader onComplete={() => setLoading(false)} />}
        <Stairs>
          <NavContext>
            <App />
          </NavContext>
        </Stairs>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />)

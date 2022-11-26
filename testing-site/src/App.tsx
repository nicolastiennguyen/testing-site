import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MantineProvider } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">

      </div>
    </MantineProvider>
  )
}

export default App

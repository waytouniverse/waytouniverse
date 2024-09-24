import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A4Resume from './A4Resume.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <A4Resume />
    </>
  )
}

export default App

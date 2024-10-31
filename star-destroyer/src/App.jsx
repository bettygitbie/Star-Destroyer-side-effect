import { useState,useEffect,useRef } from 'react'
import Space from './Space'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Star Destroyer</h1>
     <Space />
      
    </>
  )
}

export default App

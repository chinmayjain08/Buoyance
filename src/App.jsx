import { useState } from 'react'

import './App.css'
import Work from './components/work/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Work></Work>
    </>
  )
}

export default App

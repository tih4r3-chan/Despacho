import { useState } from 'react'
import Navbar from './componentes/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
      </div>
    </>
  )
}

export default App

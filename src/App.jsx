import { useState } from 'react'

import Box from './Box'

function App() {
  const [number, setNumber] = useState(0)

  function addOneNumber() {
    setNumber(number + 1)
  }

  return (
    <div>
      <h1>This is a title</h1>
      <p>{number}</p>
      <button onClick={addOneNumber}>Add one</button>
      <Box name="zoji" age={11} />
    </div>
  )
}

export default App

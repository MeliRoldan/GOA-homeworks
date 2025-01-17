import { useState } from "react"
import Header from "./Header"

function App() {
  const [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }

  return (
    <div>
      <Header title='MELI' about='About me'/>
      <Header title='GOA' about='About us'/>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column'}}>
        <p style={{fontSize: '70px', color: 'black'}}>{count}</p>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
          <button onClick={minus} style={{fontSize: '70px', padding: '10px 20px'}}>-</button>
          <button onClick={plus} style={{fontSize: '70px', padding: '10px 20px'}}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App

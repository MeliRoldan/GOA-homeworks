import { useState } from "react"

function App() {
  let [count, setCount] = useState(0)
  let [color, setColor] = useState('')

  function plus () {
    setCount (count + 1)
    if (count >= 0) {
      setColor('green')
    }
    console.log(count)
  }

  function minus () {
    setCount (count - 1)
    if (count <= 0) {
      setColor('red')
    }
    console.log(count)
  }

  return (
    <div>
      <div>
        <p style={{padding: '20px', fontSize: '30px', color: `${color}`}}>{count}</p>
        <div style={{display: 'flex', gap: '20px'}}>
          <button onClick={plus} style={{fontSize: '30px', padding: '10px 20px'}}>+</button>
          <button onClick={minus} style={{fontSize: '30px', padding: '10px 25px'}}>-</button>
        </div>
      </div>
    </div>
  )
}
  
export default App
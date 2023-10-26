import { useState } from "react"
function App(){
  const[count,setCount]=useState(0)
  const[color,setColor]=useState('red')
  const[msg,setMsg]=useState('Subscribe🔔')
  return(
      <div className="App">
        <h1>Counter</h1>
        <h2 style={{color:`${color}`, backgroundColor:`${'black'}`}}>{count}</h2>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setColor('green')}>green</button>
        <button onClick={()=>setMsg('Subscribed')}>{msg}</button>

        {/* <h1>Counter</h1>
        <h2>  {count} </h2>
        <button onClick={()=>setCount(count+1)}>+</button> */}



      </div>

  )

}
export default App
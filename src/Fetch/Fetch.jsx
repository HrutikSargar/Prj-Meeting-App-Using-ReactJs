


import { useState ,useEffect } from "react"

const Fetch = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(d=>setData(d))
  },[data])
  return (
    <div className="fetch">
      { data && data.map((x)=>{
        return(
          <section key={x.id}>
            <p>{x.name} <span>{x.email}</span></p>
            <p>{x.address.zipcode}</p>
          </section>
        )
      })

      }
      
      
    </div>
  )
}
export default Fetch
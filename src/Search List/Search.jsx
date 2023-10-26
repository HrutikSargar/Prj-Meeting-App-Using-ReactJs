import { useEffect ,useState } from "react"
const Search = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(d=>setData(d))

    },[data])
  return (
    <div>
      <center>
        <input type={'search'} onChange={(e)=>setSearch(e.target.value)} />
        {data.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>{
            return(
                <section key={item.id} >
                    <center><p>{item.name}</p></center>
                </section>
            )
        })}
      </center>
    </div>
  )
}

export default Search

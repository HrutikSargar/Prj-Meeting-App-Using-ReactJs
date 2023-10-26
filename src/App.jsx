// // import Html from './/HTML/html'
// // import Html from './HTML/Html2Prj'
// import './App.css'
// // import Navbar  from "./Css/Navbar/Navbar"
// // import Header from "./Css/Header/Header"
// // import Footer from './Css/Footer/Footer'






// // import Html from './Clone/Nav/Html'
// // import Body from './Clone/Body/Body'
// import FunctionalComponents from './Components/FunctionalComponents'
// const App=()=>{
//   return(
//     <div className='App'>
//       {/* <Navbar></Navbar>
//       <Header></Header>
//       <Footer></Footer> */}
//       {/* <Html></Html> */}
//       {/* <Body></Body> */}
//       <FunctionalComponents></FunctionalComponents>
//     </div>
//   )
// }
// export default App


// import FunProps from "./FunctionProps/FunProps"
// import ClassProps from "./Props/ClassProps"
// const name ="hrutik"
// const age =23

// const App = () => {
//   return (
//     <div>
//       {/* <FunProps name={name} age={age}></FunProps> */}
//       <ClassProps name={name} age={age}></ClassProps>
//     </div>
//   )
// }

// // export default App

// import { useState } from "react"
// function App(){
//   const[count,setCount]=useState(0)
//   const[price,setPrice]=useState(50)
//   const[msg , setMsg]=useState('Buy')
//   // const[color,setColor]=useState('red')
//   // const[msg,setMsg]=useState('Subscribe🔔')
//   return(
//       <div className="App">
//         {/* <h1>Counter</h1>
//         <h2 style={{color:`${color}`, backgroundColor:`${'black'}`}}>{count}</h2>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <button onClick={()=>setCount(count-1)}>-</button>
//         <button onClick={()=>setColor('green')}>green</button>
//         <button onClick={()=>setMsg('Subscribed')}>{msg}</button> */}
//         <div className="div1">
//         <h1>Counter</h1>
        
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <span>  {count} </span>
//         <button onClick={()=>setCount(count-1)}>-</button>
//         <br /><br />
//         <button onClick={()=>setPrice(50*count)}>Price</button>
//         <h2>{price}</h2>

//         <button onClick={()=>setMsg("thanks for visiting")}>{msg}</button>


//         </div>
//         {/* <h1>Counter</h1>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         <span>  {count} </span>
//         <button onClick={()=>setCount(count-1)}>-</button>
//         <br /><br />
//         <button onClick={()=>setPrice(50*count)}>Price</button>
//         <h2>{price}</h2>

//         <button onClick={()=>setMsg("thanks for visiting")}>{msg}</button> */}



//       </div>

//   )

// }
// export default App




//CLASS COMPONENT EXAMPLE
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state={count:0,color:'red',}
    
//   }
//   change(){
//     this.setState({count:this.state.count+1})
//   }
//   color()
//   {
//   this.setState({color:"green"})
//   }
//   render() {
//     return (
//       <div>
//         <h1 style={{color:`${this.state.color}`}}>{this.state.count}</h1>
//         <button onClick={()=>this.change()}>+</button>  
//         <button onClick={()=>this.color()}>change color</button>    
//       </div>
//     )
//   }
// }

//USE EFFECT

// import { useEffect, useState } from "react"
// const App = () => {
//     const[count,setCount]=useState(0)
//     useEffect(()=>{
//       document.title=`${count}`
//     },[count]

//     )
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <button onClick={()=>setCount(count-1)}>-</button>
      
//     </div>
//   )
// }

// export default App


//use state
// import { useEffect, useState } from "react"
// const App = () => {
//   const[Name,setName]=useState("")
//   useEffect(()=>{
//     document.title=`${Name}`
//   })
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setName(e.target.value)}/>
//       <h1>{`my name is ${Name}`}</h1>
//     </div>
//   )
// }

// export default App

//ADD EVENT LISTENER
// import { useEffect } from "react"
// const App = () => {
//   useEffect(()=>{
//     let a=document.getElementById('btn1')
//     a.addEventListener('click',()=>{
//       window.print()
//     })
//   })
//   return (
//     <div>
//       <button id="btn1">Click</button>
//     </div>
//   )
// }
// export default App


// import { useState ,useEffect } from "react"

// const App = () => {
//   const[data,setData]=useState([])
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res=>res.json())
//     .then(d=>setData(d))
//   },[data])
//   return (
//     <div className="fetch">
//       { data && data.map((x)=>{
//         return(
//           <section key={x.id}>
//             <p>{x.name} <span>{x.email}</span></p>
//             <p>{x.address.zipcode}</p>
//           </section>
//         )
//       })

//       }
      
      
//     </div>
//   )
// }

// export default App
// import Fetch from "./Fetch/fetch"
// import Search from "./Search List/Search"
// // import fetch from "./Fetch/Fetch"

// const App = () => {
//   return (
//     <div className="div1">
//       {/* <Fetch></Fetch> */}
//       <Search></Search>
//     </div>
//   )
// }

// export default App



// import task1 from "./task/task1"

// const App = () => {
//   return (
//     <div className="divMain">
//     <task1></task1> 
//     </div>
//   )
// }

// export default App


// import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
      const roomID = getUrlParams().get('roomID') || randomID(5);
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 1173652826;
      const serverSecret = "10a999dc225edf9b4e2e289f49d9c036";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
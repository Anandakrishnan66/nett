//import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/rowpost/rowpost';
//import axios from 'axios'
//import {useState} from 'react'
function App() {

   //const [state,setState]=useState([]);

  return (
    // <div className="App">
    //   <button onClick={()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
    //     console.log(response.data)
    //     setState(response.data)
    //     })
    //   }}
    //     >
    //   click
    //     </button>

    //     {state.map((obj,index)=>{
    //       return(
    //         <div>
    //           <h1>{index+1}</h1>
              
    //           <h2>{obj.title}</h2>
    //           <h2>{obj.body}</h2>
    //           </div>
    //       )
    //     })}
   
   
   
    // </div>
    <div>
      <Navbar/>

  <Banner/>

  <Rowpost/>

























    </div>

  );
}

export default App;

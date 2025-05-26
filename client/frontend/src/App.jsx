import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [persons, setData] = useState([])
  const [name,setname] = useState('');
  const [work,setwork] = useState('');
  const changeHandlern=e=>{
    setname(e.target.value);
  }

 const changeHandlerw=e=>{
    setwork(e.target.value);
  }


 const submitHandler=e=>{
  e.preventDefault();
    axios.post('https://mern-project-noag.onrender.com/api/addnames',{name,work}).then(
      res => {
        setname('');
        setwork('');
        setData(res.data)
      }
    ).catch((err)=>console.log(err))
  }


  useEffect(() => {
    axios.get('https://mern-project-noag.onrender.com/api/allnames').then(
      res => setData(res.data)
    )
  }, [])

  return (
    <>
      <h1>Welcome to Task List APP(First Deployed app)</h1>
      <h2>Add New Tasks</h2>
      <form onSubmit={submitHandler}>
    

      <input type = "text" name="name" value={name} onChange={changeHandlern} placeholder='Task' />
      <br></br>
     <input type = "text" name="work" value={work} onChange={changeHandlerw} placeholder='Description' />
     <br></br>
     <br></br>

        <button type = "submit" >Submit</button>
      </form>
      {
        persons.map((item, index) => (
        <p key={index}> <b>Task:</b>{item.name} &nbsp; <b>Description:</b>{item.work}  <button onClick={e=>{axios.delete(`https://mern-project-noag.onrender.com/api/delete/${item.name}`).then( res => setData(res.data))}} >Delete</button></p>
        ))
      }

<p>&copy; {new Date().getFullYear()} Task List All rights reserved.</p>
    </>
  )
}

export default App;

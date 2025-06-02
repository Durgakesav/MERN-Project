import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Pagination from 'react-bootstrap/Pagination';


function App() {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

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
    axios.post('http://localhost:5000/api/addnames',{name,work}).then(
      res => {
        setname('');
        setwork('');
        setData(res.data)
      }
    ).catch((err)=>console.log(err))
  }


  useEffect(() => {
    axios.get('http://localhost:5000/api/allnames').then(
      res => setData(res.data)
    )
  }, [])

  return (
    <>
      <h1>Welcome to Task List App</h1>
      <h2>Add New Tasks</h2>
      <br></br><br></br>
      <FloatingLabel>
      <Form onSubmit={submitHandler}>
      <Form.Control  name="name" value={name} onChange={changeHandlern} placeholder='Task'  required/>
      <br></br>
      <Form.Control name = "work" value={work} onChange={changeHandlerw} placeholder='Description' required/>
     <br></br>
     <br></br>

      <Button variant="primary"  size="lg" type = "submit">Submit</Button>
      </Form>
      </FloatingLabel>
      <br></br><br></br>
      {
        persons.map((item, index) => (
        <p key={index}> <b>Task:</b>{item.name} &nbsp; <b>Description:</b>{item.work}  <Button  variant="danger" size="lg" onClick={e=>{axios.delete(`http://localhost:5000/api/delete/${item.name}`).then( res => setData(res.data))}} >Delete</Button></p>
        ))
      }
<p>&copy; {new Date().getFullYear()} Task List All rights reserved.</p>
    </>
  )
}

export default App;

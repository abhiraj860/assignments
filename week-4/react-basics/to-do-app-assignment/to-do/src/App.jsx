import { useState } from 'react'

function InputTitle() {
  return (
    <input type='text' placeholder='Enter title' />
  );
}

function InputDesc() {
  return (
    <input type='text' placeholder='Enter Description' />
  );
}

function Add() {
  return <button>Add item</button>
}

function Remove() {
  return <button>Remove item</button>
}

function App() {

  const [items, setState] = useState([]);
  
  return (
    <div>
      <InputTitle /> <br />
      <InputDesc /> <br />
      <Add /> 
      <Remove />
    </div>
  )
}

export default App

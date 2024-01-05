import { useState } from 'react'


function InputTitle({titleHandler, message}) {
  return (
    <input type='text' placeholder='Enter title' onChange={titleHandler} value={message}/>
  );
}

function InputDesc({descriptionHandler, message}) {
  return (
    <input type='text' placeholder='Enter Description' onChange={descriptionHandler} value={message}/>
  );
}

function Add({clickHandler}) {
  return <button onClick={clickHandler}>Add item</button>
}

function Remove() {
  return <button>Remove item</button>
}

function Todotable({itemList}) {
     const res = itemList.map((value, key)=>{
      return (
        <p key={key}>
          <b>Title:</b>&nbsp;{value.title} <br />          
          <b>Description:</b>&nbsp;{value.description}
        </p>
      );
     });
     return (
      <div>
        {res}
      </div>
     );
}

function App() {

  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageDesc, setMessageDesc] = useState('');

  function titleHandler(event) {
    setTitle(event.target.value);
    setMessageTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setDesc(event.target.value);
    setMessageDesc(event.target.value);
  }

  function addHandler() {
    if(messageTitle.length === 0) {
      alert('Please enter the title');
      return;
    }
    if(messageDesc.length === 0) {
      alert('Please enter the description');
      return;
    }
    const todo = {title, description};
    const arr = [...items, todo];
    setItems(arr);
    setMessageTitle('');
    setMessageDesc('');
  }

  

  return (
    <div>
      <InputTitle titleHandler={titleHandler} message={messageTitle}/> <br />
      <InputDesc descriptionHandler={descriptionHandler} message={messageDesc}/> <br />
      <Add clickHandler={addHandler}/> 
      <Remove />
      <Todotable itemList={items}/>
    </div>
  )
}

export default App

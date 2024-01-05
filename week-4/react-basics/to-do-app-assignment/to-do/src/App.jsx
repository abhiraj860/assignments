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

function Remove({removeHandler}) {
  return <button onClick={removeHandler}>Remove item</button>
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

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionHandler(event) {
    setDesc(event.target.value);
  }

  function addHandler() {
    if(title.length === 0) {
      alert('Please enter the title');
      return;
    }
    if(description.length === 0) {
      alert('Please enter the description');
      return;
    }
    const todo = {title, description};
    const arr = [...items, todo];
    setItems(arr);
    setTitle('');
    setDesc('');
  }

  function removeHandler() {
    const arr = [...items];
    if(arr.length === 0) {
      alert('Nothing to remove');
      return;
    }
    arr.pop();
    setItems(arr);
  }

  return (
    <div>
      <InputTitle titleHandler={titleHandler} message={title} /> <br />
      <InputDesc descriptionHandler={descriptionHandler} message={description} /> <br />
      <Add clickHandler={addHandler} /> 
      <Remove removeHandler={removeHandler} />
      <Todotable itemList={items} />
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

// const prop = {
  //   name: 'Lokeshwar',
  //   description: 'A TA in the 100xDevs Cohort 2.0',
  //   interests: ['Ionic', 'Open Source', 'App Dev'],
  //   linkedin: "https://www.linkedin.com",
  //   twitter: "https://twitter.com"
  // };

function App() {
  const [props, setProps] = useState({name: 'Your name',
                                description: 'Your description',
                                interests: ['Your interests'],
                                linkedin: "https://www.linkedin.com",
                                twitter: "https://twitter.com"
                              });
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [interests, setInterests] = useState([]);
  const [linkedIn, setLinkedIn] = useState('');
  const [twitter, setTwitter] = useState('');
                            
  function inputNameHandler(event) {
    setName(event.target.value);
  }
  
  function inputDescriptionHandler(event) {
    setDescription(event.target.value);
  }

  function interestsHandler(event) {
    const str = event.target.value;
    const arr = str.split(/[, ]+/);
    setInterests(arr);
  }
  
  function clickHandler() {
    if(name.length === 0) {
      alert('Enter name');
      return;
    }
    if(description.length === 0) {
      alert('Enter description');
      return;
    }
    if(interests.length === 0) {
      alert('Enter interests');
      return;
    }
    let copy = {...props};
    copy.name = name;
    copy.description = description;
    copy.interests = interests;
    setProps(copy);
  }


  return <div className='page'>
    <Input clickHandler={clickHandler} 
            inputNameHandler={inputNameHandler} 
            inputDescriptionHandler={inputDescriptionHandler}
            interestsHandler={interestsHandler}/>
    <Card props={props}/>
  </div>
}

function Input({clickHandler, 
                inputNameHandler, 
                inputDescriptionHandler, 
                interestsHandler}) {
  return <div>
    <input onBlur={inputNameHandler} className='inputname' type='text' placeholder='Enter your name...'/>
    <br></br>
    <input onBlur={inputDescriptionHandler} className='inputdescription' type='text' placeholder='Give a short description...'/>
    <br></br>
    <input onBlur={interestsHandler} className='interestsHandler' type='text' placeholder='Enter your interests...'/>
    <br></br>
    <button onClick={clickHandler}>Create Card</button>
  </div>
}

function Card({props}) {
  return <div className='card'>
    <h1 className='name'>{props.name}</h1>
    <p className='description'>{props.description}</p>
    <h2 className='interestsHeader'>Interests</h2>
    <ul className='interestsList'>
      {props.interests.map((value, id)=>{return <li className='interestItem' key={id}>{value}</li>})}
    </ul>
    <div className='socialLinks'>
    <a href={props.linkedin} className='link' target='_blank'>LinkedIn</a>
    <a href={props.twitter} className='link' target='_blank'>Twitter</a>
    </div>
  </div>
}

export default App

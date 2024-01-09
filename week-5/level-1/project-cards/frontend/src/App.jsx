import { useState } from 'react'
import './App.css'

function Card({props}) {
  return <div className='card'>
    <h1 className='name'>{props.name}</h1>
    <p className='description'>{props.description}</p>
    <h2 className='interestsHeader'>Interests</h2>
    <ul className='interestsList'>
      {props.interests.map((value, id)=>{return <li className='interestItem' key={id}>{value}</li>})}
    </ul>
    <div className='socialLinks'>
    <a href={props.linkedin} className='link'>LinkedIn</a>
    <a href={props.twitter} className='link'>Twitter</a>
    </div>
  </div>
}

function App() {
  const prop = {
    name: 'Lokeshwar',
    description: 'A TA in the 100xDevs Cohort 2.0',
    interests: ['Ionic', 'Open Source', 'App Dev'],
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com"
  };
  return <div>
    <Card props={prop}/>
  </div>
}

export default App

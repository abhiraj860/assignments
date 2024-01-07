import { useState } from 'react'
import './App.css'

function Card({props}) {
  return <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    {/* <p>{props.description}</p> */}
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

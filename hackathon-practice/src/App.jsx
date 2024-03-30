import { useState } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [tutors,setTutors] = useState([]);

  const response = axios.get("http://localhost:5000/api/tutor",).then((res)=>{
    console.log(res);
  }).catch((err)=>{
    console.log(err);
  })

  return (
    <>
      <h1>{tutors.length}</h1>
      {tutors.map((tutor)=>{
        return(
          <div key={tutor.id}>
            <h1>{tutor.name}</h1>
            <h2>{tutor.subTaught}</h2>
          </div>
        )
      })}
    </>
  )
}

export default App

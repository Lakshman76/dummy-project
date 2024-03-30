import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';
import Card from './components/Card';

function App() {
  const [tutors, setTutors] = useState([]);


  useEffect(() => {
    axios.get("/api/tutor").then((res) => {
      setTutors(res.data)
    }).catch((err) => {
      console.log(err);
    })
  
  },[])

  return (
    <>
     <h1>Teacher Details</h1>
    <div className='card-container'>
   
    
      {tutors.map((tutor) => {
        return (
          <div key={tutor.id} >
           
            <Card name={tutor.name} subject={tutor.subTaught} />
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App
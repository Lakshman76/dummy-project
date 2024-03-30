import { useState } from 'react';
import './App.css'
import axios from 'axios'
import { useEffect } from 'react';
<<<<<<< HEAD
import Register from './Components/Register';
=======
import Card from './components/Card';

>>>>>>> 76c5d27aba6226dc77375a00ff53debc54aa15e9
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
<<<<<<< HEAD
      <Register/>
      <h1>{tutors.length}</h1>
=======
     <h1>Teacher Details</h1>
    <div className='card-container'>
   
    
>>>>>>> 76c5d27aba6226dc77375a00ff53debc54aa15e9
      {tutors.map((tutor) => {
        return (
          <div key={tutor.id} >
           
            <Card name={tutor.name} subject={tutor.subTaught} />
          </div>
        )
      })}
<<<<<<< HEAD

=======
      </div>
>>>>>>> 76c5d27aba6226dc77375a00ff53debc54aa15e9
    </>
  )
}

export default App
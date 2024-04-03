import React from 'react'
import { useState } from 'react';

const Tutor = () => {
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
      <h1>{tutors.length}</h1>
      {tutors.map((tutor) => {
        return (
          <div key={tutor.id}>
            <h1>{tutor.name}</h1>
            <h2>{tutor.subTaught}</h2>
          </div>
        )
      })}
      
    </>
  )
}

export default Tutor
import { useState, useEffect } from "react";
import { InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import axios from "axios";
import Card from "./Card";
import "./Tutor.css"

const Tutor = () => {
  const [tutors, setTutors] = useState([]);
  const [newData, setnewData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tutor")
      .then((res) => {
        setTutors(res.data);
        setnewData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterdata = (event) => {
    if (event.target.value === "") {
      setnewData(tutors);
      return
    }
    setnewData(
      tutors.filter((tutor) => {
        return tutor.subTaught.includes(event.target.value)
      })
    )
  }
  return (
    <>
      <h1 align="center">Teacher Details</h1>
      <div className="container">
        <div className="input">
          <Search />
          <InputBase placeholder="Search for filter" onChange={filterdata} />
        </div>
        <div className="cards" >
          {
            newData.map((tutor) => {
              return (
                <div key={tutor.id}>
                  <Card name={tutor.name} subject={tutor.subTaught} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  )
}

export default Tutor
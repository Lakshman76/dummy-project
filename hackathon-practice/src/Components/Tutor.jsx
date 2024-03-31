import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Card from "./Card"

const Tutor = () => {
  const mystyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent : "center"
  };
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tutor")
      .then((res) => {
        setTutors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Teacher Details</h1>
      <div style={mystyle} >
        {tutors.map((tutor) => {
          return (
            <div key={tutor.id}>
              <Card name={tutor.name} subject={tutor.subTaught} />
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Tutor
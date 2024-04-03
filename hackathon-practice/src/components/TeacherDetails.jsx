/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./teacherDetails.css"

const TeacherDetails = () => {
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
    <div>
      <h1>Teacher Details</h1>
      <div className="card-container">
        {tutors.map((tutor) => {
          return (
            <div key={tutor.id}>
              <Card name={tutor.name} subject={tutor.subTaught} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherDetails;

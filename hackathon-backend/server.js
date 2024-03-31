const express = require("express");

const app = express();

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/tutor", (req, res) => {
  const tutors = [
    {
      id: 1,
      name: "user1",
      subTaught: "math"
    },
    {
      id: 2,
      name: "user1",
      subTaught: "math"
    },
    {
      id: 3,
      name: "user2",
      subTaught: "Chemistry"
    },
    {
      id: 4,
      name: "user3",
      subTaught: "English"
    },
    {
      id: 5,
      name: "user4",
      subTaught: "math"
    },
    {
      id: 6,
      name: "user4",
      subTaught: "Physics"
    },
    {
      id: 7,
      name: "user4",
      subTaught: "Chemistry"
    },
    {
      id: 8,
      name: "user4",
      subTaught: "math"
    },
    {
      id: 9,
      name: "user4",
      subTaught: "English"
    },
    {
      id: 10,
      name: "user4",
      subTaught: "Physics"
    },
  ]
  res.send(tutors);
})


app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

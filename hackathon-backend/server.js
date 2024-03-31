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
      subTaught: "math"
    },
    {
      id: 4,
      name: "user3",
      subTaught: "math"
    },
    {
      id: 5,
      name: "user4",
      subTaught: "math"
    }
  ]
  res.send(tutors);
})


app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

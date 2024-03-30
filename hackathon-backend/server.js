const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/tutor", (req, res) => {
  const tutor = [
    {
      id: 1,
      name: "user1",
      subTaught: "math"
    },
    {
      id: 1,
      name: "user1",
      subTaught: "math"
    },
    {
      id: 2,
      name: "user2",
      subTaught: "math"
    },
    {
      id: 3,
      name: "user3",
      subTaught: "math"
    },
    {
      id: 4,
      name: "user4",
      subTaught: "math"
    }
  ]
})

const PORT = process.env.PORT | 5000;

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

const express = require("express");
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

// Define user schema and model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: String,
  gender: String,
});

const User = mongoose.model('User', userSchema);

// database connection here 
mongoose.connect('mongodb://127.0.0.1:27017/HomeTutors', {

})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use(express.json()); // Middleware to parse JSON request bodies

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

// Define a route for saving registration data
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, birthday, gender } = req.body;
    // Create a new user instance
    const newUser = new User({ firstName, lastName, birthday, gender });
    // Save the user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

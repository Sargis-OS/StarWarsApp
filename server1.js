// Dependencies
// ===========================================================
var express = require("express");

var app = express();
const path = require("path");
var PORT = 3000;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// Data
// ===========================================================

const characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 1200
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }
];

// Create one more data entry for the character Obi Wan Kenobi.
// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
// gen route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

//add route
app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

//get all data
app.get("/api/characters", (req, res) => {
  return res.json(characters);
});
//get one object from data
app.get("/api/characters/:character", (req, res) => {
  const chosen = req.params.character;
  const chosenOne = characters.filter(obj => {
    return obj.routeName === chosen;
  });
  if (chosenOne.length) {
    return res.json(chosenOne[0]);
  }
  return res.send("character, i do not see");
});

//add object to data
app.post("/api/characters", (req, res) => {
  const newCharacter = req.body;
  console.log(newCharacter);

  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  //add new character
  characters.push(newCharacter);

  //return what was added
  res.json(newCharacter);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

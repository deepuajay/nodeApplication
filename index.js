import express from "express";
const app = express();
app.use(express.json());

const port = 3000;

let datastore = {
  users: [],
};

app.get("/users", (req, res) => {
  res.json(datastore.users);
});

app.post("/user", (req, res) => {
  const userData = req.body;
  if (!userData || !userData.username || !userData.age) {
    res.status(400).json({ error: "Invalid Data" });
  }
  datastore.users.push(userData);
  res.status(201).json(userData);
});

app.listen(port, () => console.log("Server is listening to port 3000."));

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

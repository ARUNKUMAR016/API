import express from "express";
import songsRoutes from "./routes/songs.routes.js";
import connectDb from "./lib/db.js";

const app = express();
const PORT = 6969;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({extended: true}));

connectDb();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});
// Client - middeleware
app.use('/songs', songsRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

import express from "express";
import songsRoutes from "./routes/songs.routes.js";

const app = express();
const PORT = 6969;

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

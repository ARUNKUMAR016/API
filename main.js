import express from "express";

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

//CRUD functionality 
// for reading
app.get("/songs",()=>{

})
// for create
app.post("/songs",()=>{

})  

// for update
app.put("/songs/:id",()=>{

})

// for delete
app.delete("songs/:id",()=>{
    
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

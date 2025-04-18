import express from "express";

const router= express.Router();

//CRUD functionality 
// for reading
router.get("/",(req,res)=>{
     res.send("Get all songs");
})
// for create
router.post("/",(req,res)=>{
     res.send("Create a new song");
})  

// for update
router.put("/:id",(req,res)=>{
    res.send("Update a song with id: ");
})

// for delete
router.delete("/:id",(req,res)=>{
    res.send("Delete a song with id: ");
})

export default router;
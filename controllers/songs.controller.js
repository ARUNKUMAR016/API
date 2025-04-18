import Song from "../models/songs.model.js";

export const songIndex = (req, res) => {
  res.send("Get all yuvan  songs");
};

export const songCreate = async (req, res) => {
    console.log("POST /songs route hit");
  

//validate your data
const newSong= new Song({
    title:req.body.title,
    artist:req.body.artist,
    description:req.body.description,
})

try {
    const song= await newSong.save();
    return res.status(201).json(song);
} catch (error) {
    return res.status(400).json({message:error.message});
}


    return res.json(req.body);
};



export const songUpdate = (req, res) => {
  res.send("Update a song with id: ");
};

export const songDelete = (req, res) => {
  res.send("Delete a song with id: ");
};

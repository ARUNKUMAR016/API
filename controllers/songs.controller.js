import Song from "../models/songs.model.js";

export const songIndex = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const songCreate = async (req, res) => {
  console.log("POST /songs route hit");

  //validate your data
  const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    description: req.body.description,
  });

  try {
    const song = await newSong.save();
    return res.status(201).json(song);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  return res.json(req.body);
};

export const songShow=async (req, res) => {
 //search by id
 try {
  const song = await Song.findById(req.params.id);

  if(song==null) {
    return res.status(404).json({ message: "Song not found" });
  }
  else{
    res.json(song);
  }

} catch (error) {
  res.status(500).json({ message: error.message });
}
}

export const songUpdate = async (req, res) => {
try{
const result= await Song.findOneAndUpdate({_id:req.params.id},{
  title:req.body.title,
  artist:req.body.artist,
  description:req.body.description
},
{
  new:true,
}

);
res.status(200).json(result);
}
catch(error){
  res.status(500).json({ message: error.message }); 
}
};

export const songDelete =async (req, res) => {
 const songId=req.params.id;

 //const foundSong= Song.findOne({_id:songId});

  try {
    await  Song.deleteOne({_id :songId});
    res.json({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

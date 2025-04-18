export const songIndex = (req, res) => {
  res.send("Get all yuvan  songs");
};

export const songCreate = (req, res) => {
    console.log("POST /songs route hit");
    console.log(req.body);
    res.json(req.body);
};



export const songUpdate = (req, res) => {
  res.send("Update a song with id: ");
};

export const songDelete = (req, res) => {
  res.send("Delete a song with id: ");
};

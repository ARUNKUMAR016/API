export const songIndex = (req, res) => {
  res.send("Get all yuvan  songs");
};

export const songCreate = (req, res) => {
    console.log("🔥 New version: POST /songs route hit");
    res.send("New version working");
};


export const songUpdate = (req, res) => {
  res.send("Update a song with id: ");
};

export const songDelete = (req, res) => {
  res.send("Delete a song with id: ");
};

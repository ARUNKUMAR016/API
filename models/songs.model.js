import { model, Schema } from "mongoose";

const schema = new Schema({
  title: String,
  artist: String,
  album: String,
});

//create a model
const Song = model("Song", schema);

export default Song;

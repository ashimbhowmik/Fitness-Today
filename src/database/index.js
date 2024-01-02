import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    // "mongodb+srv://docPortal:Xe37pGLblQBewU0Z@cluster0.mvrzlyk.mongodb.net/?retryWrites=true&w=majority";
    "mongodb+srv://docPortal:Xe37pGLblQBewU0Z@cluster0.mvrzlyk.mongodb.net/defenceProject";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Final Year project"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
};

export default connectToDB;

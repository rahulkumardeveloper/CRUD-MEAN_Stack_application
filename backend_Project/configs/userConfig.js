const mongoose = require("mongoose");
// connection in local mongoDb
// mongoose.connect("mongodb://localhost:27017/crud_DataBase").then(() => {
//   try {
//     console.log("Db connected Successful");
//   } catch (error) {
//     console.log(error);
//   }
// });

// connection to mongoDB cloud .
mongoose
  .connect(
    "mongodb+srv://gautamrahul995:cY5vXQVnaITctvRA@crudapplicationcluster.niolpit.mongodb.net/?retryWrites=true&w=majority&appName=CrudApplicationCluster"
  )
  .then(() => {
    try {
      console.log("Db connected Successful");
    } catch (error) {
      console.log(error);
    }
  });

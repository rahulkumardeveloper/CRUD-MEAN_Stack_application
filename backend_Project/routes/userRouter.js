const express = require("express");
const router = express.Router();
// const OlympicRunningList = require("../models/userModel");
const userController = require("../controllers/userController");
router.get("/", (req, res) => {
  res.send("This is Home page");
});
//get data from mongoDb
// router.post("/olympicrunningApi", (req, res) => {
//   console.log(req.body);
//   const addData = new OlympicRunningList(req.body);
//   addData.save().then(() => {
//     try {
//       res.send(addData);
//     } catch (error) {
//       console.log(error);
//     }
//   });
//   //   res.send()
// });
// get olympicMensList data
// router.get("/olympicrunningApi", async (req, res) => {
//   try {
//     const getData = await OlympicRunningList.find();
//     console.log(getData);
//     res.send(getData);
//   } catch (error) {
//     console.log(error);
//   }
// });
// get list data by id.

// router.get("/olympicrunningApi/:id", async (req, res) => {
//   try {
//     console.log(req.params.id);
//     const _id = req.params.id;
//     const getDataById = await OlympicRunningList.findById(_id);
//     res.send(getDataById);
//   } catch (error) {
//     console.log(error);
//   }
// });
// update list data by ID

// router.patch("/olympicrunningApi/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const updatedata = await OlympicRunningList.findByIdAndUpdate(
//       _id,
//       req.body,
//       { new: true }
//     );
//     res.send(updatedata);
//   } catch (error) {
//     console.log(error);
//   }
// });

// delete the data of list of olymic
// router.delete("/olympicrunningApi/deletelist/:id", async (req, res) => {
//   try {
//     const _id = req.params.id;
//     const deleteData = await OlympicRunningList.findByIdAndDelete(_id, {
//       new: true,
//     });
//     res.send(deleteData);
//   } catch (error) {
//     console.log(error);
//   }
// });

//============================================================================================
// create data or add data
// router.post("/olympicrunningApi");
// getting the All data
router.get("/crudApplication/getAll", userController.getDataController);
//
// create a new document by Post method

router.post(
  "/crudApplication/insertDocument",
  userController.createDataController
);

// getData by indivusial Id;

router.get(
  "/crudApplication/getDocumentById/:id",
  userController.getDatabyIdController
);

// delete document by Id
router.delete(
  "/crudApplication/deleteDocument/:id",
  userController.deleteDocumentController
);

// update document by Id

router.patch(
  "/crudApplication/updateDocument/:id",
  userController.updateDocumentController
);

module.exports = router;

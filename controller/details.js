/**
 * Mongoose User model.
 */
 const { Detail } = require("../schema/details");

const moment = require('moment');

 const HttpStatus = require("http-status-codes");
 
 /*------------------------------CREATE OPERATIONS--------------------------*/
 
 /**
  * Creating the new user
  */
 module.exports.createDetail = (req, res) => {
   // Creating a user object from frontend data
   const newDetail = new Detail({
     firstname: req.body.first,
     lastname: req.body.last,
     address: req.body.address,
     dob: req.body.dob,
     phone: req.body.phone
   });
 
   // Saving the user in the database
   newDetail.save(function (err, user) {
     if (err)
    {
        res.json({Error : err})
    }
    else{
      res.redirect('/details/add');
    }
   });
 };
 
 module.exports.bdayToday = (req, res) => {
  var id = req.params.id;
  Detail.findById(id, (err, data) => {
    if (err)
      {
        res.json({Error : err})
      }
    else{
      if(data.getIfBday())
          return res.send("Happy Birthday");
      res.send("Nope")
    }
  });
};




module.exports.getAllBday = (req, res) => {
  const arr = [];
  const today = moment().format('YYYY-MM-DD')
  Detail.find(function (err, data) {
    const arr1 = data
    if (err)
      {
        res.json({Error : err})
      }
    else{
     for(let i = 0; i < arr1.length; i++) {
       if(arr1[i]['dob'] == today) {
        console.log(arr1[i]['dob'])
         arr.push(arr1[i]['firstname']+ " "+arr1[i]['lastname']);
       }
     };
     res.send(arr)
     console.log(arr)
    }
  });
};


 /*------------------------------READ OPERATIONS--------------------------*/
 
 /**
  * Reading the existing user using request parameters.
  */
 module.exports.readUser = (req, res) => {
   User.findById(req.params.id, (err, user) => {
     if (err)
       return res
         .status(HttpStatus.NOT_FOUND)
         .json({ message: "Error fetching the user by id" });
     res.status(HttpStatus.OK).json({ user });
   });
 };
 
 /*
try {
  logic
  res.status(200).send("succesful")
} catch (err) {
  res.status(500).send(err)
}
 */
 
 /**
  * Reading the Last Name user using request parameters.
  */
//  module.exports.getByLastName = (req, res) => {
//    // It was earlier defined as a static method inside methods/index.js
//    Detail.findByLastName("Ch", function (err, data) {
//      if (err)
//        res.json({Error : err})

//     else
//       res.send(data)
//    });
//  };
module.exports.getByLastName = (req, res) => {
  // It was earlier defined as a static method inside methods/index.js
  User.findByLastName("Ch", function (err, data) {
    if (err)
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Lastname Mismatch" });
    res.status(HttpStatus.OK).json({ data });
  });
};
 /**
  * Fetching the user based on the age.
  */
 module.exports.getByAge = (req, res) => {
   // It was earlier defined as a static method inside methods/index.js
   User.findByAge(20, (err, data) => {
     if (err)
       return res
         .status(HttpStatus.BAD_REQUEST)
         .json({ message: "Age Mismatch" });
     res.status(HttpStatus.OK).json(data);
   });
 };
 
 /**
  * Reading the full name of the user based on the given object id
  */
 module.exports.getFullname = (req, res) => {
  Detail.findById(req.params.id, (err, data) => {
     if (err) {
       res.json({ message: "Internal Error" });
     }
     res.json(data.fullName);
   });
 };
 
 /*
  * Reading the user by it's id and checking if he is adult or not
  */
 module.exports.getName = (req, res) => {
   User.findOne({ _id: "5d91d0cdc6044d08ec7e2581" }).exec((err, user) => {
     if (err)
       return res
         .status(HttpStatus.BAD_REQUEST)
         .json({ message: "User not defined" });
 
     // getIfAdult was defines as an instance method earlier in methods/index.js
     res.status(HttpStatus.OK).json(user.getIfAdult());
   });
 };
 
 /*------------------------------UPDATE OPERATION--------------------------*/
 
 /**
  * Updating the exisiting user from the database collection
  */
 module.exports.updateUser = (req, res) => {
   User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
     if (err)
       return res
         .status(HttpStatus.BAD_REQUEST)
         .json({ message: "Cannot update the user" });
     res.status(200).json({ user });
   });
 };
 
 /*------------------------------DELETE OPERATION--------------------------*/
 
 /**
  * Deleting the user from the database.
  */
 module.exports.deleteUser = (req, res) => {
   User.findByIdAndRemove(req.params.id, err => {
     if (err)
       return res
         .status(HttpStatus.FORBIDDEN)
         .json({ message: "Request cannot be processed" });
     res.status(HttpStatus.OK).json({ message: "User Removed" });
   });
 };
 
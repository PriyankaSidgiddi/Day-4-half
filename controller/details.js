/**
 * Mongoose Detail model.
 */
 const {Detail} = require("../schema/details");

//  const HttpStatus = require("http-status-codes");
// const res = require("express/lib/response");
 
 /*------------------------------CREATE OPERATIONS--------------------------*/
 
 /**
  * Creating the new user
  */
 module.exports.createDetails = (req, res) => {
   // Creating a user object from frontend data
   const newDetail = new Detail({
     firstname: req.body.first,
     lastname: req.body.last,
     address: req.body.address,
     dob: req.body.dob,
     phone: req.body.phone,
     
   });
 
 newDetail.save(function (err, user) {
  if (err) {
    res.json({Error : err})
  }
  else{
    // res.send("Success")
    res.redirect('/details/add1');
    // console.log(req.body)
  }
    
});
 };
 /*------------------------------READ OPERATIONS--------------------------*/
 
 /**
  * Reading the existing user using request parameters.
  */
 module.exports.readUser = (req, res) => {
   Detail.findById(req.params.id, (err, user) => {
     if (err)
       return res
         .status(HttpStatus.NOT_FOUND)
         .json({ message: "Error fetching the user by id" });
     res.status(HttpStatus.OK).json({ user });
   });
 };
 
 /**
  * Reading the Last Name user using request parameters.
  */

 
 /**
  * Fetching the user based on the age.
  */

 /**
  * Reading the full name of the user based on the given object id
  */

 /*
  * Reading the user by it's id and checking if he is adult or not
  */

 
 /*------------------------------UPDATE OPERATION--------------------------*/
 
 /**
  * Updating the exisiting user from the database collection
  */

 
 /*------------------------------DELETE OPERATION--------------------------*/
 
 /**
  * Deleting the user from the database.
  */
 
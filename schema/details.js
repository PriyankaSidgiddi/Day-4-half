/**
 * Importing  the mongoose driver.
 */
 const mongoose = require("mongoose");

 /**
  * Extracting Schema property from mongoose.
  */
 const Schema = mongoose.Schema;
 
 /**
  * Everything in Mongoose starts with a Schema.
  * Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
  */
 
 /**
  * Creating the new mongoose Schema.
  */
 
 const detailSchema = new Schema({
   /**
    * To declare a path as a string you may use either the String global constructor or the string 'String'.
    * @SchemaType - String
    * The string Schema type will have the built -in validators as:
    * lowercase, uppercase, trim, match, enum, minlength, maxlength
    */
 
   firstname: {
     type: String,
     required: true
   },
 
   /**
    * @SchemaType - String
    */
 
   lastname: {
     type: String,
     required: true
   },
 
   
 
   address: {
     type: String,
     required: true
   },

   /**
    * Date is a built in type.
    * The default values can be given to the schema type as Date.now, Date.UTC
    * @SchemaType - Date
    */
 
   //dob: {
    //  type: Date,
    //  default: Date.now,
    //  trim: true
  //   day: {
  //     type: Number
  //   },
  //   month: {
  //     type: Number
  //   },
  //   year: {
  //     type: Number
  //   }
  //  },
  dob: {
    type: String,
    required: true
  },

  /**
    * @SchemaType - Number
    */
 
   phone: {
     type: Number
   },
 
 
 });
 
 module.exports.detailSchema = detailSchema;
 
 require("../methods/details");
 
 const Detail = mongoose.model("Detail", detailSchema);
 
 module.exports.Detail = Detail;
 
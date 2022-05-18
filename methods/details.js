/**
 * Mongoose Schema Methods for User model.
 */

 const { detailSchema } = require("../schema/details");

 const moment = require('moment')

 /**
  * Instance methods: These are the methods which are used to manipulate the individual document.
  */
 detailSchema.methods.getIfAdult = function () {
   return this.age > 18;
 };
 
 /**
  * Static methods: These are the methods which are used to query the whole collection.
  * - Add a function property to schema.statics
  */
 detailSchema.statics.findByAge = function (age, callback) {
   this.find({ age: age }, callback);
 };
 
 /**
  * Static methods
  * - Call the Schema#static() function
  */
 detailSchema.static("findByLastName", function (lastname, callback) {
   this.find({ lastname: lastname }, callback);
 });
 
 /**
  * Virtual Methods:The virtual methods are not persisted to MongoDB.
  *  The method contains getters and setters which are used to combine the mongoose fields.
  */
 detailSchema.virtual("fullName").get(function () {
   return this.firstname + " " + this.lastname;
 });
 


 detailSchema.methods.getIfBday = function () {
  var today = moment().format('YYYY-MM-DD');
  return today == this.dob
}

detailSchema.methods.getAllBday = function () {
  var arr = []
  var today = moment().format('YYYY-MM-DD');
  today == this.dob
}


detailSchema.static("findByLastName", function (dob, callback) {
  this.find({ dob: dob }, callback);
});

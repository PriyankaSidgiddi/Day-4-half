/**
 * Mongoose Schema Methods for User model.
 */

 const { detailSchema } = require("../schema/details");

 /**
  * Instance methods: These are the methods which are used to manipulate the individual document.
  */
 detailSchema.methods.getIfAdult = function () {
   return this.age > 18;
 };
 
 //Create an instance method to check if a person has birthday today.
 
//  detailSchema.methods.findBirthdayToday = function () {
//    return (this.day == 2 && this.month == 1) ? true : false
 
//  }

// detailSchema.methods.findBirthdayToday = function (err, data) {
//   var today = moment("DD,MMMM,YYYY");
//   return today == this.dob;

// };

 /**
  * Static methods: These are the methods which are used to query the whole collection.
  * - Add a function property to schema.statics
  */
//  detailSchema.statics.findByAge = function (age, callback) {
//    this.find({ age: age }, callback);
//  };
 
 //Create a static method to fetch all users who are having birthday today.
 
//  detailSchema.statics.findAllBirthdayToday = function (day,month, callback) {
//    this.find({ day: day, month: month}, callback);
//  };
 
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
 



 
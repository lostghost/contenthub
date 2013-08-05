
/**
 * Class resources
 */

module.exports = function(app){
  var controller = {};

  // Return a list of classes
  controller.index = function(req, res){
    // TODO: Query for a list of classes and return
    res.json(200, {result: "success", message: "Here are your classes"});
  };

  // Create a new class
  controller.create = function(req, res){
    // TODO: Create a new class
    res.json(201, {result: "success", message: "Created a new class"});
  };

  // Show a specific class
  controller.show = function(req, res){
    // TODO: Load a class and return it
    res.json(200, {result: "success", message: "Here is your class"});
  };

  return controller;
};
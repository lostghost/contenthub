
/**
 * Type resources
 */

module.exports = function(app){
  var Types = require("../models/types")(app);

  var controller = {};

  // Return a list of types
  controller.index = function(req, res){
    // TODO: Query for a list of types and return
    res.json(200, {result: "success", message: "Here are your types"});
  };

  // Create a new type
  controller.create = function(req, res){
    var name        = req.body.name
      , description = req.body.description;

    t = Types.new(name, {description: description});
    t.save();
    res.json(201, t);
  };

  // Show a specific type
  controller.show = function(req, res){
    // TODO: Load a type and return it
    res.json(200, {result: "success", message: "Here is your type"});
  };

  return controller;
};
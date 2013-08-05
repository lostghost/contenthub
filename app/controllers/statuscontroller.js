
/**
 * Status resource
 */

module.exports = function(app){
  var controller = {};

  // Show application status
  controller.show = function(req, res){
    // TODO: Provide applicaiton status
    res.json(200, {result: "success"});
  };

  return controller;
};
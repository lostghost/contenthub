
/**
 * 404 not found middleware
 */

module.exports = function(req, res, next){
  res.json(404, {result: "error", error: "not found"});
};
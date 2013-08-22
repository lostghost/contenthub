
// Constructor
module.exports = function(app) {

  var MongoClient = require("mongodb").MongoClient;

  Types = function(name, options) {
    this.name = name;
    this.description = null;

    if (options !== undefined) {
      this.description = options.description || null;
    }
  };

  // Static methods
  Types.find = function() {
    return new Types("foobar");
  };

  Types.new = function(name, options) {
    return new Types(name, options);
  };

  // Instance methods
  Types.prototype.save = function() {
    t = this;
    MongoClient.connect(app.get('mongodb_server'), function(err, db) {
      if(err) throw err;

      var collection = db.collection('types');
      collection.insert(t, function(err, docs) {
      });
    });
  };

  return Types;
};
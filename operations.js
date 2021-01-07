const assert = require("assert");

exports.insertDocument =(db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};

exports.findDocument =(db, collection, callback) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removtDocument =(db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.deleteOne(document);
};

exports.updateDocument =(db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, {$set : update},null);
};
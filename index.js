const MongoClient =require('mongodb').MongoClient;
const assert = require ('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client) => {

    assert.equal(err,null); //check that error not equal to null

    console.log('Coonnected correctly to server');

    const db =client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name":"ahmed", "description": "test ahmed description"},(err,result) =>{
        assert.equal(err,null);

        console.log('After Insert: \n');
        console.log(result.ops); // how many operations that is done successfuly

        collection.find({}).toArray((err,docs) => {
            assert.equal(err,null);
            
            console.log('Found \n');
            console.log(docs);

            db.dropCollection('dishes', (err,result) =>{
                assert.equal(err,null);

                client.close();  //close the connection with database

            });
        });
    });
});
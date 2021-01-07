const MongoClient =require('mongodb').MongoClient;
const assert = require ('assert');
const dboper =require ('./operations');
const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err,client) => {

    assert.equal(err,null); //check that error not equal to null

    console.log('Coonnected correctly to server');

    const db =client.db(dbname);
    dboper.insertDocument(db,{name:'ali' , description: 'test ali description'}, 'dishes', (result) => {

        console.log('Insert Document : \n', result.ops);
        dboper.findDocument(db,'dishes', (docs) =>{
            console.log('Found Documents: \n',docs);

            dboper.updateDocument(db, {name:'ali'}, { description: 'update test '},'dishes',(result) => {
                console.log('Updated Document:\n', result.result);
                
                dboper.findDocument(db,'dishes', (docs) =>{
                    console.log('Found Documents: \n',docs);
                    db.dropCollection('dishes',(result) => {
                        console.log('Dropped Collection \n',result);
                        client.close();
                    });
                });
            });
        });

    });
});
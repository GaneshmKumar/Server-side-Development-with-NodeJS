/*
* @Author: GaNeShKuMaRm
* @Date:   2017-03-11 16:13:59
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-03-11 16:22:34
*/

'use strict';

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//connectionUrl
var url = 'mongodb://localhost:27017/conFusion';


MongoClient.connect(url, function(err, db) {
    assert.equal(err, null);
    console.log("Connected correctly to server");

    var collection = db.collection('dishes');

    //Insert a document
    collection.insertOne({name: "Uthapizza", description: "test"}, function(err, result) {
            assert.equal(err, null);
            console.log("After Insert: ");
            console.log(result.ops);

            //Find all documents
            collection.find({}).toArray(function(err, docs) {
                assert.equal(err, null);
                console.log("Found: ");
                console.log(docs);

                //Drop collection
                db.dropCollection("dishes", function(err, result) {
                    assert.equal(err, null);
                    db.close();
                });
            });
    });
});
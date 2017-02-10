const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const argv = require('minimist')(process.argv.slice(2));
const mongoUri = argv.mongoUri;
const port = argv.port || 3000;

MongoClient.connect(mongoUri).then(db => {
    app.use(express.static('static'));

    app.get('/sponsors', function(req, res, cb) {
        db.collection('sponsors').aggregate([
            { $group: { _id: '$host', urls: { $push: '$url' }, paths: { $push: '$path' }}},
            { $project: { _id: 0, host: '$_id', urls: 1, paths: 1 }}
        ], (err, results) => {
            if (err) {
                cb(err);
            }
            res.send(results);
        });
    });

    app.listen(port, function() {
      console.log('ADvocate server listening on port 3000!')
    });

});


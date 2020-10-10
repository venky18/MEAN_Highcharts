//Comment
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const fs = require('fs');

var db

MongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
  if (err) return console.log(err)
  db = database.db('sensordata');
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.use('/static', express.static('public/js'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
 })

app.get("/sensordata",(req, res) => {
	db.collection('tdr_data').find().toArray(function(err, results) {
  // console.log(results)
	})
	getData(res)
});

function getData(responseObj) {
	db.collection('tdr_data').find().toArray(function(err, results) {
		if ( err ) throw err;
		var timestamp = []
		var dataArray = []
		for (index in results){
			var doc = results[index]
			var time = doc['date']
			var data = doc['value']
			timestamp.push(time)
			dataArray.push(data)
		}
		var dataset = [

        // {	"timestamp" : (new Date()).getTime(),
        // 	"data": Math.random() * (0.2500 - 0.2750) + 0.2750 	},
        {	"timestamp" : timestamp[timestamp.length-1],
        	"data": dataArray[dataArray.length-1] 	},
		]
	responseObj.json(dataset[0])
	})
}
//vm

var express = require('express');
var router = express.Router();
var fs = require('fs');
var contactList = [];
var messagesList = {};
var counter = 0;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	console.log(contactList);
	console.log("id is "+counter);
	res.json(contactList[id]);
});

router.post('/', function(req, res, next) {
	fs.readFile("../local/contactList.json", function(err, data){
		if(err) console.log("Error while reading from file");
		else{
			contactList = JSON.parse(data);
			console.log("parsed data is "+JSON.stringify(contactList));
		}
	});
	var sendText = "";
	if(contactList[counter] === undefined) { 
		sendText += counter +"";
		contactList[counter] = req.body; 
	}      
	counter++;
	console.log(contactList);
	console.log("counter is "+counter);
	res.status(200).send(sendText);
	fs.writeFile("../local/contactList.json", JSON.stringify(contactList), function(err){
		if(err) console.log("Error while writing to file.");
	});
});

router.put('/:id', function(req, res, next) {
	console.log(req.body);
	var id = req.params.id;
	for(var key in req.body) {
		var contactObj = contactList[id];
		contactObj[key+""] = req.body[key];
		contactList[id] = contactObj;
	}
	console.log("list is "+contactList);
	res.status(200).json(contactList[id]);
});

/* get and put messages */
router.get('/:id/messages', function(req, res, next) {
	var id = req.params.id;
	var msgarray = messagesList[id+""];
	res.status(200).json(msgarray);
});

router.post('/:id/messages', function(req, res, next) {
	var id = req.params.id;
	console.log("msg body is "+req.body["msg"]);
	if (messagesList[id+""] == undefined) messagesList[id+""] = {"msg":[]};
	var msgarray = messagesList[id+""]["msg"];
	msgarray.push(req.body["msg"]);
	messagesList[id+""]["msg"] = msgarray;
	console.log(messagesList); 
	res.status(200).json(req.body);
});

module.exports = router;

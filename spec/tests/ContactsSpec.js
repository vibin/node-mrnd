
describe("Contacts Test Suite", function(){

	//var request = require('request');
	var request = require('request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";

	//request = request.defaults({'proxy': 'http://proxy.iiit.ac.in:8080'});
	describe("hello world", function(){

		it("hello world",function(done){
			request.get(base_url, function(error, response, body){
		    	//console.log(response);
		    	expect(response.statusCode).toBe(200);
				//expect(body).toBe("Hello World");

				done();
			});
		});
	});

	describe("create update contact", function(){
		var idCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			console.log(JSON.stringify(contact));

			request.post({url: contacts_url,
				body: contact,
				json: true
			}, 
			function(error, response, body){

				expect(response.statusCode).toBe(200);
				console.log(body);
				idCreated = body;
				console.log("id created is "+idCreated);
				done();
			});
		});

		it("should retrieve contact",function(done){

			request.get({
				url: contacts_url + "/" + idCreated,
				json: true
			},
			function(error, response, body){

				expect(response.statusCode).toBe(200);
				console.log(body);
				expect(body.firstName).toBe("jagan");
				done();
			});
		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
				url: contacts_url + "/" + idCreated,
				body: updatedContact,
				json: true
			},
			function(error, response, body){

				expect(response.statusCode).toBe(200);
				console.log(body);
				expect(body.firstName).toBe("jagan-updated");
				expect(body.phone).toBe("23002300");
				done();
			});
		});
	});

	//TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
	describe("post and get message to contact", function(){
		var messageUrl = base_url+"/contacts/0/messages";
		var message = new Object();
		message.msg = "Please do the nodejs project";

		it("should post message to contact", function(done){
			request.post({url: messageUrl,
				body: message,
				json: true
			}, 
			function(error, response, body){

				expect(response.statusCode).toBe(200);
				console.log(body);
				expect(body).toEqual(message);
				done();
			});

		});

		// it("should get message for contact", function(done){
		// 	var messageUrl = base_url+"/contacts/0/messages";
		// 	request.get(messageUrl, 

		// 		function(error, response, body){
		// 			expect(response.statusCode).toBe(200);
		// 			console.log("b is "+body);
		// 			var result = "{\"msg\":[\"Please do the nodejs project\"]}";
		// 			expect(body).toEqual(result);
		// 			done();
		// 		})
		// });
	});
});

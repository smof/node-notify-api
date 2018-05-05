//Bounces message to console

exports.notify = function(req, res) {

        var requestBody = JSON.stringify(req.body);
	console.log('Notification payload received: ' + requestBody);
	res.send({"Message":"Received"});        
            
};



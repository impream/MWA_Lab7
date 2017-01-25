let express = require('express');
let router = express.Router();
let MongoClient = require('mongodb').MongoClient;

router.get('/', function(req, res, next){
	
	MongoClient.connect('mongodb://localhost/Prem', function(err, db){
		if(err) throw err;
		db.collection('homework6').findOne({}, function(err, doc){
			if(err) throw err;
			
						  
						  
			const crypto = require('crypto');
			const decipher = crypto.createDecipher('aes256', 'asaadsaad');

			var decrypted = '';
			decipher.on('readable', () => {
			  var data = decipher.read();
			  if (data)
				decrypted += data.toString('utf8');
			});
			decipher.on('end', () => {
			  res.render('decrypt', { decryptedText: decrypted });
			});

			var encrypted = doc.message;
			decipher.write(encrypted, 'hex');
			decipher.end();

			  
		});
	});
	

});

module.exports = router;
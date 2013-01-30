express = require('express');
var app = express();
var nstore = require('nstore');
var cons = require('consolidate');

var swig = require('swig');
swig.init({ root: __dirname + '/templates', allowErrors: true });

app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname+ '/templates');
nstore = nstore.extend(require('nstore/query')());
var data = nstore.new('data/data.db', function(){console.log("data ready...");
        //data.clear();
	data.save("data", {name: "testing"}, function (err, key) {
   		if (err) { throw err; }
    		// You now have the generated key
	});
	
        app.get('/', function(req, res){
           data.all(function (err, results) {
	      console.log(results);
              res.render('index',results);
           });  
	});

	 var port = 306543;
         app.listen(port);
	 console.log("listening on "+port);


});

// Create a store


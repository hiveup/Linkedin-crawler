
var config = require(__dirname+"/config");

var Linkedin = require('node-linkedin')(config.api_key, config.secret_key, function(err,body){
	console.log(err,body);
});


  var OAuth = require('oauth');

     var OAuth2 = OAuth.OAuth2;
     var twitterConsumerKey = 'your key';
     var twitterConsumerSecret = 'your secret';
     var oauth2 = new OAuth2(config.api_key,
       config.secret_key,
       'https://www.linkedin.com/uas/',
       null,
       'oauth2/token',
       null);
     oauth2.getOAuthAccessToken(
       '',
       {'grant_type':'client_credentials'},
       function (e, access_token, refresh_token, results){
       console.log('bearer: ',access_token);
     });


//var linkedin = Linkedin.init(config.oauth_user_secret);

// Linkedin.auth.getAccessToken(res, req.query.code, function(err, results) {
//     if ( err )
//         return console.error(err);

    /**
     * Results have something like:
     * {"expires_in":5184000,"access_token":". . . ."}
     */

//     console.log(results);
// });


// linkedin.connections.retrieve(function(err, connections) {
// // console.log(connections);
// // console.log(err);

// });


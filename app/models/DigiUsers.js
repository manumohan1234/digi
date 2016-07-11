// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('DigiUsers', {
	 id : {type : Integer, default: ''}
	,join_date : {type : Timestamp, default: ''}
	,last_login : {type : Timestamp, default: ''}
	,password : {type : String, default: ''}
	,role : {type : String, default: ''}
	,gen_link : {type : String, default: ''}
	,is_active : {type : Boolean, default: ''}
	,username : {type : String, default: ''}
});

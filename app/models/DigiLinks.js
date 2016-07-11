// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Digilinks', {
	 id : {type : Integer, default: ''}
	,created_date : {type : Timestamp, default: ''}
	,description : {type : String, default: ''}
	,display_name : {type : String, default: ''}
	,gen_link : {type : String, default: ''}
	,gen_link : {type : String, default: ''}
	,is_active : {type : Boolean, default: ''}
	,org_link : {type : String, default: ''}
});

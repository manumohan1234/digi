// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('DigiLinkClicks', {
	 id : {type : Integer, default: ''}
	,click_time : {type : Timestamp, default: ''}
	,count : {type : Integer, default: ''}
	,link_id : {type : Integer, default: ''}
	,location : {type : String, default: ''}
	,location_ref : {type : String, default: ''}
	,user_id : {type : Integer, default: ''}
});

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Template_schema = new mongoose.Schema({
    id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    name : {type: String },
    html : {type:String}
 
},{
    versionKey : false

});
autoIncrement.initialize(mongoose);
Template_schema.plugin(autoIncrement.plugin ,{model : 'Template' , startAt:1} );
module.exports = mongoose.model('Template',Template_schema);


var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Member_schema = new mongoose.Schema({
//    member_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
   id:{type:Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   id:{type:String},
   updated_date:{type : Date ,default: Date.now()},
   email_address:{type : String},
   status:{type:String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Member_schema.plugin(autoIncrement.plugin,{ model: 'Member', startAt: 1 });
var Member = mongoose.model('Member', Member_schema);
module.exports = Member;





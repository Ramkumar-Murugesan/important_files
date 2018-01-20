var contact_model = require("../models/Contact");

module.exports.create_contact = function(contact ,callback){
    var contact_value = new contact_model(contact);
    contact_value.save(function(err,contact){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{
            console.log("create list value success")
        callback(contact);
    }
    })
} 
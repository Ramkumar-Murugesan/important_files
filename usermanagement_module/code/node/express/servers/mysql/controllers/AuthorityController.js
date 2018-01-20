var service = require("../services/AuthorityService");

module.exports.get_all_Authority = function(req,res){
    service.get_all_Authority(function(authority){
        res.status(200);
        res.json(authority);
    })
}

module.exports.save_Authority = function(req,res){
    var data = req.body;
    console.log("save new roles is --->>><><",data)
    service.save_Authority(data , function(authority){
        res.status(200);
        res.json(authority);
    })
}

module.exports.delete_Authority = function(req,res){
    var data = req.body;
    service.delete_Authority(data,function(authority){
        res.status(200);
        res.json(authority);
    })
}

module.exports.getAuthority_by_user = function(req,res){
    var data = req.body;
    service.getAuthority_by_user(data,function(authority){
        res.status(200);
        res.json(authority);
    })
}

var member_model = require("../models/Member");
var stats_dao = require("../daos/stats_dao")
var member_dao = require("../daos/member_dao")
var list_dao = require("../daos/List_dao")

module.exports.create_member = function (member, callback) {
    console.log("create member in dao------------", member);
    var member_value = new member_model(member);
    member_value.save(function (err, member) {
        if (err) {
            console.log("create list value err---", err)
            callback(err);
        }
        else {

            list_dao.findbylistid(member.id, function (listdetails) {
                if (listdetails !== null) {
                    stats_dao.getstatsbyid(listdetails.stats, function (statsdetails) {
                        var statsvalues = statsdetails;
                        statsvalues[0].member_count = statsvalues[0].member_count + 1;
                        stats_dao.update_stats(statsvalues, function (values) {
                            if (values) {
                                console.log("stats values saved s")
                            }
                        })
                    })
                }

            })

            callback(member);
        }
    })
}
module.exports.getmemberbyuserid = function (userid, callback) {
    member_model.find({ id: userid }, function (memberbyuserid, err) {
        if (err) {
            callback(err);
        }
        else {
            callback(memberbyuserid);
        }

    })
}

module.exports.get_all_list_member = function (member_id, callback) {
    member_model.findById(member_id, function (err, member) {
        if (err) {

            callback(err);
        }
        else {

            callback(member);
        }
    })
}

module.exports.get_all_member = function (callback) {
    member_model.find(function (err, member) {
        if (err) {
            callback(err);
        }
        else {
            callback(member);
        }
    })
}

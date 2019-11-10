var mongoose = require('mongoose');

var areaLeader = new mongoose.Schema({
    areaLeader: String,
    cellGroupLeader: String
})

module.exports = mongoose.model('areaLeader', areaLeader);
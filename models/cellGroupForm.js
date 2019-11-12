var mongoose = require('mongoose');

var formSchema = new mongoose.Schema(
    {
        cellGroupDate: Date,
        leader: String,
        numPpl: Number,
        newPpl: Number,
        activity: String,
        message: String,
        problem: String,
        areaLeader: String,
        submittedOn: Date
    }
);

module.exports = mongoose.model('cellGroupFormSubmission', formSchema);
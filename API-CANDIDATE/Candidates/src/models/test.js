const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({

    candidateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "candidates",
    },

    firstRound : {
        type :Number,
        require: true
    },
    secondRound : {
        type :Number,
        require: true
    },
    thirdRound : {
        type :Number,
        require: true
    }
})

module.exports = mongoose.model('testScores',testSchema)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var answerPollSchema = new mongoose.Schema({
    email: String,
    password: String,
    groupname: String
});
var Answerpoll = mongoose.model('Answerpoll', answerPollSchema);
exports.default = Answerpoll;
//# sourceMappingURL=questionPoll.js.map
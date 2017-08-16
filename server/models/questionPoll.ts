import * as mongoose from 'mongoose';

const answerPollSchema = new mongoose.Schema({
  email: String,
  password: String,
  groupname: String
});

const Answerpoll = mongoose.model('Answerpoll', answerPollSchema);

export default Answerpoll;
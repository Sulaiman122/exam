const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  // : { type: Boolean, default: false },
  // iisDelsCompleted: { type: Boolean, default: false },
  // timeStamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model("newTodo", todoSchema);

// module.exports = todoModel;

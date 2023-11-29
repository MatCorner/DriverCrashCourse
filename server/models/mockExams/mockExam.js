import mongoose from "mongoose";
const { Schema } = mongoose;

const mockExamSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("mockexam", mockExamSchema);

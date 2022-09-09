import { Schema, model } from 'mongoose';

const catModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hobbies: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default model('cat', catModel);

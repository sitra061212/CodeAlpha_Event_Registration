import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export default model('Event', EventSchema);

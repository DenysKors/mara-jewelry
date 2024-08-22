import mongoose from 'mongoose';

const Stone = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
});
export default mongoose.models.Stone || mongoose.model('Stone', Stone);

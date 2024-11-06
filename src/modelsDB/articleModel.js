import mongoose from 'mongoose';

const Article = mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    parts: [
      {
        text: {
          type: String,
          required: true,
        },
        imageUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
export default mongoose.models.Article || mongoose.model('Article', Article);

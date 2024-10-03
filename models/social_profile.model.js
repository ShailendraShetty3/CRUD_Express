const mongoose = require("mongoose");

const SocialSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    platform: {
      type: String,
      required: true,
    },
    platform_user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Social = mongoose.model("Social", SocialSchema);

module.exports = Social;

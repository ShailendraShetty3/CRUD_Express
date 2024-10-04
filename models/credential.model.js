const mongoose = require("mongoose");

const CredentialSchema = mongoose.Schema(
  {
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
    hasher: {
      type: String,
      required: true,
        },
    password_hash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Credential = mongoose.model("Credential", CredentialSchema);

module.exports = Credential;

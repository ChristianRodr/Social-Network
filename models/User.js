const { Schema, model } = require("mongoose");

const User = model("User", userSchema);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/],
    },

    thoughts: [
      {
        type: Schema.types.ObjectId,
        ref: "Thought",
      },
    ],

    friends: [
      {
        type: Schema.types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
module.exports = User;

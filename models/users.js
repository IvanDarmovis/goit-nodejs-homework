const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    avatarURL: {
      type: String,
      require: true
    },
    token: {
      type: String,
      default: null
    },
    verify: {
      type: Boolean,
      default: false
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"]
    }
  },
  { versionKey: false, timestamps: true }
);

const joiUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string(),
  token: Joi.string()
});

const joiSubscriptionSchema = Joi.string().valid("starter", "pro", "business");

const joiEmailSchema = Joi.object({ email: Joi.string().required() });

const User = model("user", userSchema);

module.exports = {
  User,
  joiUserSchema,
  joiSubscriptionSchema,
  joiEmailSchema
};

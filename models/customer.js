const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    firstname: {
      require: true,
      type: String,
    },
    lastname: {
      require: true,
      type: String,
    },
    phonenumber: {
      require: true,
      type: Number,
    },
    email: {
      require: true,
      type: String,
    },
    gender: {
      require: true,
      type: String,
    },
    Status: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "customer",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
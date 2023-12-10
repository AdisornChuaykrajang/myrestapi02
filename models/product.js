const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Name: {
      require: true,
      type: String,
    },
    Price: {
      require: true,
      type: Number,
    },
    Quantity: {
      require: true,
      type: Number,
    },
    Status: {
      require: true,
      type: Boolean,
    },
  },
  {
    collection: "product",
    timestamps: true,
    versionKeys: false,
  }
);

module.exports = mongoose.model("Product", productSchema);
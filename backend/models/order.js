const mongoose = require("mongoose");

const order = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "books",
        },
        status: {
            type: String,
            default: "Order Placed",
            enum: ["Order Placed", "Out for Delivery", "Order Delivered, Order Cancelled"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("order", order);
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: String,
    avatar: String,
    description: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,
    categoryId: String,
}, {
    timestamps: true,  // Tự động thêm createdAt và updatedAt
});

const Article = mongoose.model("Article", articleSchema, "articles");

export default Article;

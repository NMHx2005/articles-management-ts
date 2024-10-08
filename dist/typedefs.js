"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type Article {
        id: String
        title: String
        avatar: String
        description: String
        categoryId: String
        category: Category
    }

    type Category {
        id: String
        title: String
        avatar: String
    }
    type Query {
        getListArticle: [Article],
        getArticle(id: String): Article,

        getListCategory: [Category],
        getCategory(id: String): Category
    }
    type message {
        code: Int,
        message: String
    }
    input ArticleInput {
        title: String
        avatar: String
        description: String
        categoryId: String
    }

    input CategoryInput {
        title: String,
        avatar: String
    }
    type Mutation {
        createArticle(article: ArticleInput): Article
        deleteArticle(id: ArticleInput): message
        updateArticle(id: String, article: ArticleInput): Article

        createCategory(category: CategoryInput): Category
        deleteCategory(id: String): message
        updateCategory(id: String, category: CategoryInput): Category
    }
`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefsCategory = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefsCategory = (0, apollo_server_express_1.gql) `
    type Category {
        id: String
        title: String
        avatar: String
    }
    type Query {
        getListCategory: [Category],
        getCategory(id: String): Category
    }
    type message {
        code: Int,
        message: String
    }

    input CategoryInput {
        title: String,
        avatar: String
    }
    type Mutation {
        createCategory(category: CategoryInput): Category
        deleteCategory(id: String): message
        updateCategory(id: String, category: CategoryInput): Category
    }
`;

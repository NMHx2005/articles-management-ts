import { gql } from "apollo-server-express";


export const typeDefsCategory = gql`
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
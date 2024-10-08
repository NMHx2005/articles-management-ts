import { gql } from "apollo-server-express";


export const typeDefs = gql`
    type Article {
        id: String
        title: String
        avatar: String
        description: String
    }
    type Query {
        getListArticle: [Article],
        getArticle(id: String): Article
    }
    type message {
        code: Int,
        message: String
    }
    input ArticleInput {
        title: String
        avatar: String
        description: String
    }
    type Mutation {
        createArticle(article: ArticleInput): Article
        deleteArticle(id: ArticleInput): message
        updateArticle(id: String, article: ArticleInput): Article
    }
`;
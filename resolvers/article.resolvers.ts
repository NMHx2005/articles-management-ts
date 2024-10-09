import Article from "../models/acticel.model";


export const resolversArticle = {
  Query: {
    getListArticle: async (_, args) => {
        const { sortKey, sortValue } = args;

        // Sắp xếp
        const sort = {};

        if (sortKey && sortValue) {
            sort[sortKey] = sortValue;
        }
        // Hết sắp xếp

        const articles = await Article
            .find({ 
                deleted: false 
            })
            .sort(sort);


        return articles;
    },
    getArticle: async (_, args) => {
      const { id } = args;

      const article = await Article.findOne({
        _id: id,
        deleted: false
      })

      return article;
    }
  },
  Article: {
    category: async (article) => {
      const record = await Article.findOne({
        _id: article.categoryId,
        deleted: false
      });


      return record;
    }
  },
  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;

      const record = new Article(article);
      await record.save();

      return record;
    },
    deleteArticle: async (_, args) => {
      const { id } = args;

      await Article.updateOne({
        _id: id
      }, {
        deleted: true
      })

      return {
        code: 200,
        message: "Xóa thành công"
      };
    },
    updateArticle: async (_, args) => {
      const { id, article } = args;

      await Article.updateOne({
        _id: id,
        deleted: false
      }, article)

      const record = await Article.findOne({
        _id: id,
        deleted: false
      })

      return record;
    }
  }
};
import Article from "../models/acticel.model";


export const resolversArticle = {
  Query: {
    getListArticle: async (_, args) => {
        const { 
            sortKey, 
            sortValue, 
            limitItems = 2, 
            page = 1,
            filterKey,
            filterValue,
            keyword
        } = args;

        // Bộ lọc
        const find = {
            deleted: false
        }
        if(filterKey && filterValue) {
            find[filterKey] = filterValue;
        }
        // Hết bộ lọc

        // Tìm kiếm
        if (keyword) {
            const regex = new RegExp(keyword, 'i');
            find["title"] = regex;
        }
        // Hết Tìm kiếm

        // Sắp xếp
        const sort = {};

        if (sortKey && sortValue) {
            sort[sortKey] = sortValue;
        }
        // Hết sắp xếp

        // Phân trang
        const skip: number = (page - 1) * limitItems;
        // Hết phân trang


        const articles = await Article
            .find(find)
            .limit(limitItems)
            .skip(skip)
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
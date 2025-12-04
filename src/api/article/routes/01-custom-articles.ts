export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/greetings', 
      handler: 'article.greetings',
      config: {
        auth: false,
      },
    },
    {
      method: 'POST',
      path: '/articles/test', 
      handler: 'article.submitArticles',
      config: {
        auth: false,
      },
    },
  ],
};
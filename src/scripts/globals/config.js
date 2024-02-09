const CONFIG = {
  KEY: process.env.SPOONACULAR_API_KEY,
  BASE_URL: 'https://api.spoonacular.com/recipes/',
  DEFAULT_LANGUAGE: 'en-us',
  BASE_URL_ARTICLE: 'https://eatpedia-article-api.up.railway.app/',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'eatpedia-recipes-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'recipes',
};

export default CONFIG;

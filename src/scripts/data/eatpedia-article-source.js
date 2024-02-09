import API_ENDPOINT from '../globals/api-endpoint';

class EatpediaAPISource {
  static async getArticles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();
    return responseJson.articles;
  }
}

export default EatpediaAPISource;

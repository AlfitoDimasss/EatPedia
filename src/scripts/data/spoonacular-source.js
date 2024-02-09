import API_ENDPOINT from '../globals/api-endpoint';

class SpoonacularSource {
  static async latestRecipe() {
    const response = await fetch(API_ENDPOINT.LATEST_RECIPE);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async getBaseRecipe() {
    const response = await fetch(API_ENDPOINT.BASE_SEARCH);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchRecipe(val) {
    const response = await fetch(`${API_ENDPOINT.BASE_SEARCH}&query=${val}`);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchRecipeByQueryLink(query) {
    const response = await fetch(query);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async getDetailRecipe(id) {
    const detailResponse = await fetch(`${API_ENDPOINT.DETAIL_INFORMATION(id)}`);
    const detailResponseJson = await detailResponse.json();
    const detailInstruction = await fetch(`${API_ENDPOINT.DETAIL_INSTRUCTION(id)}`);
    const detailInstructionJson = await detailInstruction.json();
    const detailEquipment = await fetch(`${API_ENDPOINT.DETAIL_EQUIPMENT(id)}`);
    const detailEquipmentJson = await detailEquipment.json();
    const detailLabel = await fetch(`${API_ENDPOINT.NUTRITION_LABEL(id)}`);
    const detailLabelHtml = await detailLabel.text();
    const detailSimilarRecipes = await fetch(`${API_ENDPOINT.SIMILAR_RECIPES(id)}`);
    const detailSimilarRecipesJson = await detailSimilarRecipes.json();
    return { detailResponseJson, detailInstructionJson, detailEquipmentJson, detailLabelHtml, detailSimilarRecipesJson };
  }
}

export default SpoonacularSource;

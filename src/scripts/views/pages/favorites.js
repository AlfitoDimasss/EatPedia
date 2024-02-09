import FavoriteRecipeIdb from '../../data/favorite-recipe-idb';
import { createRecipeItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
    <section class="section">
      <h1 class="favorite-recipes__title">Favorite Recipes</h1>
      <div class="favorite-recipes__recipe-container" id="favoriteRecipeContainer"></div>
    </section>
    `;

    const favoriteRecipeContainer = document.getElementById('favoriteRecipeContainer');

    const recipes = await FavoriteRecipeIdb.getAllRecipes();

    recipes.forEach((recipe) => {
      favoriteRecipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });
  },
};

export default Favorites;

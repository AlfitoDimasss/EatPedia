import SpoonacularSource from '../../data/spoonacular-source';
import Jumbotron from './components/jumbotron';
import About from './components/about';
import Feature from './components/feature';
import LatestRecipe from './components/latest-recipe';
import Team from './components/team';
import { createRecipeItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content" id="content"></div>
    `;
  },

  async afterRender() {
    const content = document.querySelector('.content');
    content.innerHTML += `
      ${Jumbotron()}
      ${About()}
      ${Feature()}
      ${LatestRecipe()}
      ${Team()}
    `;
    const recipeContainer = document.getElementById('recipeContainer');
    const recipes = await SpoonacularSource.latestRecipe();
    recipes.forEach((recipe) => {
      recipeContainer.innerHTML += createRecipeItemTemplate(recipe);
    });
  },
};

export default Home;

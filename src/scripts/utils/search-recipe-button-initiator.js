import SpoonacularSource from '../data/spoonacular-source';
import DisplayRecipesPagination from './display-recipes-pagination-initiator';
import { showLoader, hideLoader } from './loader-indicator-util';

const SearchRecipeButtonInitiator = {
  init({ button, input }) {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      if (input.value !== '') {
        showLoader(document.getElementById('loader'));
        const results = await SpoonacularSource.searchRecipe(input.value);
        hideLoader(document.getElementById('loader'));
        const title = document.querySelector('.recipes__title');
        title.innerText = `${results.length} Recipes Found`;
        DisplayRecipesPagination.init({
          recipes: results,
        });
      }
    });
  },
};

export default SearchRecipeButtonInitiator;

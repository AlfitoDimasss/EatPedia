import SpoonacularSource from '../data/spoonacular-source';
import API_ENDPOINT from '../globals/api-endpoint';
import DisplayRecipesPagination from './display-recipes-pagination-initiator';
import { showLoader, hideLoader } from './loader-indicator-util';

let query = API_ENDPOINT.BASE_SEARCH;

const getKeyword = () => {
  const keyword = document.getElementById('recipesSearch').value;
  if (keyword !== '') {
    query += `&query=${keyword}`;
  }
};

const getFoodType = () => {
  const foodType = document.getElementById('foodType').value;
  if (foodType !== 'all') {
    query += `&type=${foodType}`;
  }
};

const getNutrition = () => {
  const minCalorie = document.getElementById('minCalorie').value;
  if (minCalorie !== '') {
    query += `&minCalories=${minCalorie}`;
  }

  const maxCalorie = document.getElementById('maxCalorie').value;
  if (maxCalorie !== '') {
    query += `&maxCalories=${maxCalorie}`;
  }

  const minCholesterol = document.getElementById('minCholesterol').value;
  if (minCholesterol !== '') {
    query += `&minCholesterol=${minCholesterol}`;
  }

  const maxCholesterol = document.getElementById('maxCholesterol').value;
  if (maxCholesterol !== '') {
    query += `&maxCholesterol=${maxCholesterol}`;
  }

  const minFat = document.getElementById('minFat').value;
  if (minFat !== '') {
    query += `&minFat=${minFat}`;
  }

  const maxFat = document.getElementById('maxFat').value;
  if (maxFat !== '') {
    query += `&maxFat=${maxFat}`;
  }
};

const getDiet = () => {
  const diet1 = document.getElementById('diet1');
  const diet2 = document.getElementById('diet2');
  const diet3 = document.getElementById('diet3');
  const values = [];

  if (diet1.checked) {
    values.push(diet1.value);
  }

  if (diet2.checked) {
    values.push(diet2.value);
  }

  if (diet3.checked) {
    values.push(diet3.value);
  }

  if (values.length !== 0) {
    query += '&diet=';
    values.forEach((val, index) => {
      if (index !== values.length - 1) {
        query += `${val},`;
      } else {
        query += `${val}`;
      }
    });
  }
};

const getAllergy = () => {
  const allergy1 = document.getElementById('allergy1');
  const allergy2 = document.getElementById('allergy2');
  const allergy3 = document.getElementById('allergy3');
  const values = [];

  if (allergy1.checked) {
    values.push(allergy1.value);
  }

  if (allergy2.checked) {
    values.push(allergy2.value);
  }

  if (allergy3.checked) {
    values.push(allergy3.value);
  }

  if (values.length !== 0) {
    query += '&intollerance=';
    values.forEach((val, index) => {
      if (index !== values.length - 1) {
        query += `${val},`;
      } else {
        query += `${val}`;
      }
    });
  }
};

const SearchFilterButtonInitiator = {
  init({ btnMobile, btnDesktop, card }) {
    btnMobile.addEventListener('click', async (e) => {
      e.preventDefault();
      query = API_ENDPOINT.BASE_SEARCH;
      getKeyword();
      getFoodType();
      getNutrition();
      getDiet();
      getAllergy();
      card.style.display = 'none';
      showLoader(document.getElementById('loader'));
      const results = await SpoonacularSource.searchRecipeByQueryLink(query);
      hideLoader(document.getElementById('loader'));
      const title = document.querySelector('.recipes__title');
      title.innerText = `${results.length} Recipes Found`;
      DisplayRecipesPagination.init({
        recipes: results,
      });
    });

    btnDesktop.addEventListener('click', async (e) => {
      e.preventDefault();
      query = API_ENDPOINT.BASE_SEARCH;
      getKeyword();
      getFoodType();
      getNutrition();
      getDiet();
      getAllergy();
      showLoader(document.getElementById('loader'));
      const results = await SpoonacularSource.searchRecipeByQueryLink(query);
      hideLoader(document.getElementById('loader'));
      const title = document.querySelector('.recipes__title');
      title.innerText = `${results.length} Recipes Found`;
      DisplayRecipesPagination.init({
        recipes: results,
      });
    });
  },
};

export default SearchFilterButtonInitiator;

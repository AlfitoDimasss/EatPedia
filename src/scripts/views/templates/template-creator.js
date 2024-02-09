import { makeIngredients, makeInstruction, makeNutritions, makeLabel, makeEquipments, makeSimilarRecipe } from '../../utils/detail-recipe-utilities';

const createLikeButtonTemplate = () => `
  <button aria-label="like this recipe" id="likeButton" class="like">
    <i class="fa-regular fa-star" aria-hidden="true"></i>
  </button>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this recipe" id="likeButton" class="like">
    <i class="fa-solid fa-star" aria-hidden="true"></i>
  </button>
`;

const createRecipeItemTemplate = (recipe) => `
<div class="recipe-item">
  <div class="recipe-item__header">
    <img class="recipe-item__header__poster" alt="${recipe.title}"
        src="${recipe.image || 'https://picsum.photos/id/666/800/450?food'}">
  </div>
  <div class="recipe-item__content">
    <h3><a href="/#/detail/${recipe.id}">${recipe.title}</a></h3>
    <div class="recipe-item__content__icons">
      <div class="recipe-item__content__icons__icon">
        <i class="fa-solid fa-heart-pulse" style="color: #50bb2b;"></i>
        <span>${recipe.healthScore || 'N/A'}</span>
        <p>Healthy</p>
      </div>
      <div class="recipe-item__content__icons__icon">
        <i class="fas fa-clock" style="color: #eab049;"></i>
        <span>${recipe.readyInMinutes}</span>
        <p>Minutes</p>
      </div>
      <div class="recipe-item__content__icons__icon">
        <i class="fas fa-utensils" style="color: #d32929;"></i>
        <span>${recipe.servings}</span>
        <p>Servings</p>
      </div>
    </div>
  </div>
</div>
`;

const createRecipeDetailTemplate = (recipe, equipments, instructions, detailLabel, similar) => `
  <div class="recipe-detail">
    <h1 class="recipe-detail__title">${recipe.title}</h1>
    <div class="recipe-detail__left-side">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail__image">
      <div class="recipe-detail__information">
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Cooking Time:</p>
          <p class="recipe-detail__information__item__body"><i class="fa-regular fa-clock"></i> ${recipe.readyInMinutes} Min</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Serving Portion:</p>
          <p class="recipe-detail__information__item__body"><i class="fa-solid fa-utensils"></i> ${recipe.servings}</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Health Score:</p>
          <p class="recipe-detail__information__item__body"><i class="fa-solid fa-heart-pulse"></i> ${recipe.healthScore} %</p>
        </div>
        <div class="recipe-detail__information__item">
          <p class="recipe-detail__information__item__head">Weight Point:</p>
          <p class="recipe-detail__information__item__body"><i class="fa-solid fa-weight-scale"></i> ${recipe.weightWatcherSmartPoints} Pts</p>
        </div>
      </div>
      <div class="recipe-detail__ingredients">
        <h5><i class="fa-solid fa-carrot"></i> Ingredients</h5>
        <hr>
        <ul>
          ${makeIngredients(recipe.extendedIngredients)}
        </ul>
      </div>
      <div class="recipe-detail__equipments">
        <h5><i class="fa-solid fa-blender"></i> Equipments</h5>
        <hr>
        <ul>
          ${makeEquipments(equipments.equipment)}
        </ul>
      </div>
      <div class="recipe-detail__instructions">
        <h5><i class="fa-solid fa-book-open"></i> Instruction</h5>
        <hr>
        <ol>
          ${makeInstruction(instructions)}
        </ol>
      </div>
      <div class="recipe-detail__summary">
        <h5><i class="fa-solid fa-lightbulb"></i> Recipe Facts</h5>
        <hr>
        <p>${recipe.summary}</p>
      </div>
    </div>
    <div class="recipe-detail__right-side">
      <div class="recipe-detail__nutritions">
        <h5><i class="fa-brands fa-nutritionix"></i> Nutritional Content</h5>
        <div class="recipe-detail__nutrition">
          ${makeNutritions(recipe.nutrition)}
        </div>
      </div>
      <div class="recipe-detail__similar-recipe">
        <h5><i class="fa-solid fa-kitchen-set"></i> Similar Recipes</h5>
        <ul>
          ${makeSimilarRecipe(similar)}
        </ul>
      </div>
      <div class="recipe-detail__label">
        ${detailLabel}
        <!-- ${makeLabel()} -->
      </div>
    </div>
    
  </div>
`;

export { createRecipeItemTemplate, createRecipeDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };

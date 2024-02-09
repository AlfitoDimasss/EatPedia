const LatestRecipe = () => `
  <section class="section latest-recipe-section">
    <div class="latest-recipe">
      <h1>Latest Recipe</h1>
      <p class="latest-recipe__description">New recipes that are updated daily.</p>
      <div class="latest-recipe__recipe-container" id="recipeContainer"></div>
      <a href="#/recipes" class="latest-recipe__btn-selengkapnya">See More</a>
    </div>
    <img src="./images/honey.png" alt="Honey" class="latest-recipe__decoration latest-recipe__decoration-1" crossorigin="anonymmous">
    <img src="./images/peach.png" alt="Peach" class="latest-recipe__decoration latest-recipe__decoration-2" crossorigin="anonymmous">
  </section>
`;

export default LatestRecipe;

const FilterCard = () => `
<div class="recipes__filter-card-wrapper" id="filterCard">
  <div class="recipes__filter-card">
    <p class="recipes__filter-card__close">&times;</p>
    <h5>Recipe Filters</h5>
    <form action="">
      <label for="foodType">Cuisine Type</label>
      <select id="foodType">
        <option value="all">All</option>
        <option value="appetizer">Appetizers</option>
        <option value="main course">Main Course</option>
        <option value="dessert">
        Desserts</option>
        <option value="breakfast">Breakfast</option>
        <option value="salad">Salad</option>
        <option value="soup">Soup</option>
        <option value="drink">Drink</option>
      </select>
      <hr>
      <label>Nutrition</label>
      <label for="minCalorie" class="label-inner">Calories</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minCalorie">
        <input type="text" placeholder="Max" id="maxCalorie">
      </div>
      <label for="minCholesterol" class="label-inner">Cholesterol (mg)</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minCholesterol">
        <input type="text" placeholder="Max" id="maxCholesterol">
      </div>
      <label for="minFat" class="label-inner">Fat (g)</label>
      <div class="recipes__filter-card__nutrition-wrapper">
        <input type="text" placeholder="Min" id="minFat">
        <input type="text" placeholder="Max" id="maxFat">
      </div>
      <hr>
      <label for="diet">Diet</label>
      <div id="diet" class="recipes__filter-card__diet">
        <input type="checkbox" id="diet1" value="vegetarian">
        <label for="diet1" class="label-inner-checkbox"> Vegetarian</label><br>
        <input type="checkbox" id="diet2" value="pascetarian">
        <label for="diet2" class="label-inner-checkbox"> Pascetarian</label><br>
        <input type="checkbox" id="diet3" value="gluten">
        <label for="diet3" class="label-inner-checkbox"> Gluten Free</label><br>
      </div>
      <hr>
      <label for="allergy">Allergy</label>
      <div id="allergy" class="recipes__filter-card__allergy">
        <input type="checkbox" id="allergy1" value="peanut">
        <label for="allergy1" class="label-inner-checkbox"> Peanut</label><br>
        <input type="checkbox" id="allergy2" value="egg">
        <label for="allergy2" class="label-inner-checkbox"> Egg</label><br>
        <input type="checkbox" id="allergy3" value="seafood">
        <label for="allergy3" class="label-inner-checkbox"> Seafood</label><br>
      </div>
      <div class="recipes__filter-button-wrapper">
        <button type"button" id="filterButtonMobile" class="recipes__filter-button__mobile">Filter Search</button>
        <button type"button" id="filterButtonDesktop" class="recipes__filter-button__desktop">Filter Search</button>
      </div>
    </form>
  </div>
</div>
`;

export default FilterCard;

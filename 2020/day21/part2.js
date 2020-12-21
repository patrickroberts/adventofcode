import { ingredientByAllergen } from './ingredients.js';

const canonicalDangerousIngredients = Array.from(ingredientByAllergen)
  .sort(([a], [b]) => -(a < b) || +(a > b))
  .map((entry) => entry[1])
  .join(',');

console.log(canonicalDangerousIngredients);

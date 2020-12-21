import input from '../../shared/input.js';
import { food, word, ingredientByAllergen, dangerousIngredients } from './ingredients.js';

let sum = 0;

for (const [, ingredients, allergens] of input.matchAll(food)) {
  if (allergens.match(word).every((allergen) => ingredientByAllergen.has(allergen))) {
    for (const [ingredient] of ingredients.matchAll(word)) {
      if (!dangerousIngredients.has(ingredient)) {
        ++sum;
      }
    }
  }
}

console.log(sum);

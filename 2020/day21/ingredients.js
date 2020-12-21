import input from '../../shared/input.js';

const food = /^(.*) \(contains (.*)\)$/gm;
const word = /[a-z]+/g;
const allIngredients = new Set();
const allAllergens = new Set();
const ingredientByAllergen = new Map();
const dangerousIngredients = new Set();

for (const [, ingredients, allergens] of input.matchAll(food)) {
  for (const [ingredient] of ingredients.matchAll(word)) {
    allIngredients.add(ingredient);
  }

  for (const [allergen] of allergens.matchAll(word)) {
    allAllergens.add(allergen);
  }
}

for (let found = true; found;) {
  found = false;

  for (const allergen of allAllergens) {
    if (ingredientByAllergen.has(allergen)) {
      continue;
    }

    let allPossibleIngredients = new Set();
    let first = true;

    for (const [, ingredients, allergens] of input.matchAll(food)) {
      if (!allergens.match(word).includes(allergen)) {
        continue;
      }

      const possibleIngredients = new Set();

      for (const [ingredient] of ingredients.matchAll(word)) {
        if (first) {
          if (!dangerousIngredients.has(ingredient)) {
            allPossibleIngredients.add(ingredient);
          }
        } else if (allPossibleIngredients.has(ingredient)) {
          possibleIngredients.add(ingredient);
        }
      }

      if (first) {
        first = false;
      } else if (possibleIngredients.size === 1) {
        const [ingredient] = possibleIngredients;
        ingredientByAllergen.set(allergen, ingredient);
        dangerousIngredients.add(ingredient);
        found = true;
      } else {
        allPossibleIngredients = possibleIngredients;
      }
    }
  }
}

export { food, word, ingredientByAllergen, dangerousIngredients };

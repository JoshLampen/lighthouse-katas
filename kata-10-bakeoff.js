const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let combinedList = [];
  for (let i = 0; i < bakeryA.length; i++) {
    combinedList.push(bakeryA[i]);
  }
  for (let j = 0; j < bakeryA.length; j++) {
    combinedList.push(bakeryB[j]);
  }
  for (const recipe of recipes) {
    let inList = false;
    let alsoInList = false;
    for (let w = 0; w < combinedList.length; w++) {
      if (recipe.ingredients[0] === combinedList[w]) {
        inList = true;
      }
      if (recipe.ingredients[1] === combinedList[w]) {
        alsoInList = true;
      }
    }
    if (inList && alsoInList) {
      return recipe.name;
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
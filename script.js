function appendInput(parent, name, placeholder, id, classes = 'ingr-stat', type = 'number') {
  const newIng = document.createElement('input');
  newIng.type = type;
  newIng.name = name;
  newIng.classList.add(classes);
  newIng.min = 0;
  newIng.id = name + '-' + id;
  newIng.placeholder = placeholder;
  parent.appendChild(newIng);
}

// Function for creating new ingredient input
/*
function addIngredient() {
  // Creating all divs
  const newDiv = document.createElement('div');
  const topDiv = document.createElement('div');
  const gen = document.createElement('div');
  const macro = document.createElement('div');
  const micro = document.createElement('div');

  // Adding classes
  newDiv.classList.add('ingredient');
  topDiv.classList.add('ingr-top');
  gen.classList.add('ingr-gen');
  macro.classList.add('ingr-macro');
  micro.classList.add('ingr-micro');

  // Getting ID for ingredient div
  const newId = 'ingr_';
  let nextIndex = 0;
  const lastIngredient = document.querySelector('.ingredient');
  if (lastIngredient != null) {
    const lastId = lastIngredient.id;
    const splitId = lastId.split('_');
    nextIndex = Number(splitId[1]) + 1;
  }
  newDiv.id = newId;

  // Appending sub-divs
  newDiv.appendChild(topDiv);
  newDiv.appendChild(gen);
  newDiv.appendChild(macro);
  newDiv.appendChild(micro);

  // topDiv elements
  const heading = document.createElement('input');
  heading.type = 'text';
  heading.placeholder = `Ingredient ${nextIndex + 1}`;
  topDiv.appendChild(heading);

  const remove = document.createElement('button');
  remove.textContent = 'X';
  remove.addEventListener('click', () => {
    newDiv.parentNode.removeChild(newDiv);
  });
  topDiv.appendChild(remove);

  // adding textboxes
  const ingIn = [
    [gen, 'servings', 'Servings per Cycle'],
    [gen, 'cps', 'Calories(kcal) per Serving'],
    [macro, 'carbs', 'Carbohydrates(g) per Serving'],
    [macro, 'fat', 'Fat(g) per Serving'],
    [macro, 'protein', 'Protein(g) per Serving'],
    [micro, 'calcium', 'Calcium(mg) per Serving'],
    [micro, 'iron', 'Iron(mg) per Serving'],
    [micro, 'magnesium', 'Magnesium(mg) per Serving'],
    [micro, 'phosphorus', 'Phosphorus(mg) per Serving'],
    [micro, 'potassium', 'Potassium(mg) per Serving'],
    [micro, 'sodium', 'Sodium(mg) per Serving'],
    [micro, 'vit-a', 'Vitamin A(mcg RAE) per Serving'],
    [micro, 'vit-e', 'Vitamin E(mcg AT) per Serving'],
    [micro, 'vit-d', 'Vitamin D(mg) per Serving'],
    [micro, 'vit-c', 'Vitamin C(mg) per Serving'],
    [micro, 'thiamin', 'Thiamin(mg) per Serving'],
    [micro, 'riboflavin', 'Riboflavin(mg) per Serving'],
    [micro, 'niacin', 'Niacin(mg) per Serving'],
    [micro, 'vit-b6', 'Vitamin B-6(mg) per Serving'],
    [micro, 'vit-b12', 'Vitamin B-12(mcg) per Serving'],
    [micro, 'chlorine', 'Chlorine(mg) per Serving'],
    [micro, 'vit-k', 'Vitamin K(mcg) per Serving'],
    [micro, 'folate', 'Folate(mcg) per Serving'],
  ];
  for (let i = 0; i < ingIn.length; i++) {
    appendInput(ingIn[i][0], ingIn[i][1], ingIn[i][2]);
  }

  // Appending newDiv to body
  const button = document.querySelector('#add-ingredient');
  document.querySelector('#ingredients').insertBefore(newDiv, button);
} */

// Function for creating new ingredient input
function addIngredient() {
  // Creating all divs
  const newDiv = document.createElement('div');
  const topDiv = document.createElement('div');
  const gen = document.createElement('div');
  const macro = document.createElement('div');
  const micro = document.createElement('div');

  // Adding classes
  newDiv.classList.add('ingredient');
  topDiv.classList.add('ingr-top');
  gen.classList.add('ingr-gen');
  macro.classList.add('ingr-macro');
  micro.classList.add('ingr-micro');

  // Getting ID for ingredient div
  const newId = 'ingr_';
  let nextIndex = 0;
  const lastIngredient = document.querySelector('.ingredient');
  if (lastIngredient != null) {
    const lastId = lastIngredient.id;
    const splitId = lastId.split('_');
    nextIndex = Number(splitId[1]) + 1;
  }
  newDiv.id = newId;

  // Appending sub-divs
  newDiv.appendChild(topDiv);
  newDiv.appendChild(gen);
  newDiv.appendChild(macro);
  newDiv.appendChild(micro);

  // topDiv elements
  const heading = document.createElement('input');
  heading.type = 'text';
  heading.placeholder = `Name (Ingredient ${nextIndex + 1})`;
  topDiv.appendChild(heading);

  const remove = document.createElement('button');
  remove.textContent = 'X';
  remove.addEventListener('click', () => {
    newDiv.parentNode.removeChild(newDiv);
  });
  topDiv.appendChild(remove);

  // adding textboxes
  const ingIn = [
    [gen, 'servings', 'Servings per Cycle'],
    [macro, 'cps', 'Calories(kcal) per Serving'],
    [macro, 'carbs', 'Carbohydrates(g) per Serving'],
    [macro, 'fat', 'Fat(g) per Serving'],
    [macro, 'protein', 'Protein(g) per Serving'],
    [micro, 'calcium', 'Calcium(mg) per Serving'],
    [micro, 'iron', 'Iron(mg) per Serving'],
    [micro, 'magnesium', 'Magnesium(mg) per Serving'],
    [micro, 'phosphorus', 'Phosphorus(mg) per Serving'],
    [micro, 'potassium', 'Potassium(mg) per Serving'],
    [micro, 'sodium', 'Sodium(mg) per Serving'],
    [micro, 'vit-a', 'Vitamin A(mcg RAE) per Serving'],
    [micro, 'vit-e', 'Vitamin E(mcg AT) per Serving'],
    [micro, 'vit-d', 'Vitamin D(mg) per Serving'],
    [micro, 'vit-c', 'Vitamin C(mg) per Serving'],
    [micro, 'thiamin', 'Thiamin(mg) per Serving'],
    [micro, 'riboflavin', 'Riboflavin(mg) per Serving'],
    [micro, 'niacin', 'Niacin(mg) per Serving'],
    [micro, 'vit-b6', 'Vitamin B-6(mg) per Serving'],
    [micro, 'vit-b12', 'Vitamin B-12(mcg) per Serving'],
    [micro, 'chlorine', 'Chlorine(mg) per Serving'],
    [micro, 'vit-k', 'Vitamin K(mcg) per Serving'],
    [micro, 'folate', 'Folate(mcg) per Serving'],
  ];
  for (let i = 0; i < ingIn.length; i++) {
    appendInput(ingIn[i][0], ingIn[i][1], ingIn[i][2], nextIndex);
  }
  appendInput(gen, 'url', 'QFC product URL', nextIndex, 'url', 'text');

  // Adding a ingredient url submit button
  const urlSubmit = document.createElement('button');
  urlSubmit.innerHTML = 'Fill using URL';
  urlSubmit.id = nextIndex;
  urlSubmit.type = 'button';
  urlSubmit.style = 'margin: 0 0 5px 25%;';
  urlSubmit.addEventListener('click', (e) => {
    const request = new XMLHttpRequest();
    request.onload = function () {
      alert(request.responseText);
    };
    const url = document.querySelector('#url-' + nextIndex).value;
    request.open('GET', '/scraped/url: ' + url, true);
    request.send();
  });
  gen.appendChild(urlSubmit);

  // Appending newDiv to body
  const button = document.querySelector('#add-ingredient');
  document.querySelector('#ingredients').insertBefore(newDiv, button);
}

// Gets TDEE, assums form has been filled correctly
function getTDEE(height, mass, age, sex, activity) {
  sex = sex === 'M' ? 5 : -161;
  const TDEE = activity * (10 * mass + 6.25 * height - 5 * age + sex);
  return Math.round(TDEE);
}

// Checks that form has been filled correctly
function checkForm() {
  const impMass = parseFloat(document.querySelector('#weight').value);
  const age = parseFloat(document.querySelector('#age').value);
  const loc = parseFloat(document.querySelector('#length').value); // length of cycle
  const male = document.querySelector('#male').checked;
  const female = document.querySelector('#female').checked;
  if (
    Number.isNaN(impMass)
    || Number.isNaN(age)
    || Number.isNaN(loc)
    || (male === false && female === false)
  ) {
    return false;
  }
  return true;
}

// Gets recomended daily ranges (g) macronutrients (carbs fat protein) in array format.
function getMacroRDIs(age, TDEE) {
  let recPerc;
  if (age >= 1 && age <= 3) {
    recPerc = [
      [0.45, 0.65],
      [0.3, 0.4],
      [0.5, 0.2],
    ];
  } else if (age >= 4 && age <= 18) {
    recPerc = [
      [0.45, 0.65],
      [0.25, 0.35],
      [0.1, 0.3],
    ];
  } else {
    recPerc = [
      [0.45, 0.65],
      [0.2, 0.35],
      [0.1, 0.35],
    ];
  }
  const recGrams = [];
  for (let i = 0; i < recPerc.length; i++) {
    const range = [];
    const cpg = i === 0 || i === 2 ? 4 : 9; // Calories per gram
    for (let j = 0; j < recPerc[i].length; j++) {
      range.push(Math.round((recPerc[i][j] * TDEE) / cpg));
    }
    recGrams.push(range);
  }
  return recGrams;
}

// Gets micro RDIs
function getMicroRDIs(age, sex) {
  let microRDIs;
  if (sex === 'M') {
    if (age >= 1 && age <= 3) {
      microRDIs = [
        500, 11, 80, 460, 3.0, 1.0, 300, 6, 5, 15, 0.5, 0.5, 6, 6, 0.5, 0.9,
        200, 30, 150,
      ];
    } else if (age >= 4 && age <= 8) {
      microRDIs = [
        800, 7, 130, 500, 3.8, 1.2, 400, 7, 5, 25, 0.6, 0.6, 8, 8, 0.6, 1.2,
        250, 55, 200,
      ];
    } else if (age >= 9 && age <= 13) {
      microRDIs = [
        1300, 10, 240, 1250, 4.5, 1.5, 600, 11, 5, 45, 0.9, 0.9, 12, 12, 1.0,
        1.8, 375, 60, 300,
      ];
    } else if (age >= 14 && age <= 18) {
      microRDIs = [
        1300, 8, 410, 1250, 4.7, 1.5, 900, 15, 5, 75, 1.2, 1.3, 16, 16, 1.3,
        2.4, 550, 75, 400,
      ];
    } else if (age >= 19 && age <= 30) {
      microRDIs = [
        1000, 11, 400, 700, 4.7, 1.5, 900, 15, 5, 90, 1.2, 1.3, 16, 16, 1.3,
        2.4, 550, 120, 400,
      ];
    } else if (age >= 31 && age <= 50) {
      microRDIs = [
        1000, 8, 420, 700, 4.7, 1.5, 900, 15, 5, 90, 1.2, 1.3, 16, 16, 1.3, 550,
        120, 400,
      ];
    } else if (age >= 51 && age <= 70) {
      microRDIs = [
        1200, 8, 420, 700, 4.7, 1.3, 900, 15, 10, 90, 1.2, 1.3, 16, 16, 1.7,
        550, 120, 400,
      ];
    } else {
      microRDIs = [
        1200, 8, 420, 700, 4.7, 1.2, 900, 15, 15, 90, 1.2, 1.3, 16, 16, 1.7,
        550, 120, 400,
      ];
    }
  } else if (age >= 1 && age <= 3) {
    microRDIs = [
      500, 11, 80, 460, 3.0, 1.0, 300, 6, 5, 15, 0.5, 0.5, 6, 6, 0.5, 0.9, 200,
      30, 150,
    ];
  } else if (age >= 4 && age <= 8) {
    microRDIs = [
      800, 7, 130, 500, 3.8, 1.2, 400, 7, 5, 25, 0.6, 0.6, 8, 8, 0.6, 1.2, 250,
      55, 200,
    ];
  } else if (age >= 9 && age <= 13) {
    microRDIs = [
      1300, 10, 240, 1250, 4.5, 1.5, 600, 11, 5, 45, 0.9, 0.9, 12, 12, 1.0, 1.8,
      375, 60, 300,
    ];
  } else if (age >= 14 && age <= 18) {
    microRDIs = [
      1300, 8, 360, 1250, 4.7, 1.5, 700, 15, 5, 65, 1.0, 1.0, 14, 14, 1.2, 2.4,
      400, 75, 400,
    ];
  } else if (age >= 19 && age <= 30) {
    microRDIs = [
      1000, 15, 310, 700, 4.7, 1.5, 700, 15, 5, 75, 1.1, 1.1, 14, 14, 1.3, 2.4,
      425, 90, 400,
    ];
  } else if (age >= 31 && age <= 50) {
    microRDIs = [
      1000, 18, 320, 700, 4.7, 1.5, 700, 15, 5, 75, 1.1, 1.1, 14, 14, 1.3, 2.4,
      425, 90, 400,
    ];
  } else if (age >= 51 && age <= 70) {
    microRDIs = [
      1200, 8, 320, 700, 4.7, 1.3, 700, 15, 10, 1.1, 1.1, 14, 14, 1.5, 2.4, 425,
      90, 400,
    ];
  } else {
    microRDIs = [
      1200, 8, 320, 700, 4.7, 1.2, 700, 15, 1.1, 1.1, 14, 14, 1.5, 2.4, 425, 90,
      400,
    ];
  }
  return microRDIs;
}

// Function for displaying nutrition information
function getAverage() {
  // Checking that form has been filled correctly
  if (checkForm() === false) {
    alert('Please fill the form correctly');
    return;
  }

  // Geting data from "Your Info" section + TDEE + length of cycle (loc)
  const height = parseFloat(document.querySelector('#height').value) * 2.54; // cm
  const mass = parseFloat(document.querySelector('#weight').value) / 2.205; // kg
  const age = parseFloat(document.querySelector('#age').value);
  const sex = document.querySelector('#male').checked ? 'M' : 'F';
  const activity = document.querySelector('#activity').value; // activity index
  const TDEE = getTDEE(height, mass, age, sex, activity);
  const loc = document.querySelector('#length').value;

  const test = document.querySelector('#test'); // TODO: remove

  // Getting all ingredients data in a 2D array, each row is ingredient, each column is a stat
  // (starting at servings per cycle)
  const ingredients = document.querySelectorAll('.ingredient');
  const ingData = [];
  for (let i = 0; i < ingredients.length; i++) {
    const inputs = ingredients[i].querySelectorAll('.ingr-stat');
    const inArray = [];
    for (let j = 0; j < inputs.length; j++) {
      const input = inputs[j].value;
      if (input !== '') {
        inArray.push(parseFloat(input));
      } else {
        inArray.push(0);
      }
    }
    ingData.push(inArray);
  }

  // Multiplying each stat by the number of servings per cycle to get stat value for
  // whole cycle per ingredient.
  for (let i = 0; i < ingData.length; i++) {
    const spc = ingData[i][0]; // servings per cycle
    for (let j = 1; j < ingData[i].length; j++) {
      ingData[i][j] *= spc;
    }
  }

  // Creating array representation of output table (row is sub-array).
  const outData = [];
  // Adding daily averages (second column)
  for (let i = 1; i < ingData[0].length; i++) {
    // for every stat starting at calories
    const row = [0];
    row.push(ingData[0][i]); // add the first value of that stat to the second value of the row
    for (let j = 1; j < ingData.length; j++) {
      row[1] += ingData[j][i]; // add every other value to that
    }
    // divide by the number of values (ingredients) to get the average of each stat
    row[1] /= parseFloat(loc);
    outData.push(row); // add that row to the table
  }
  test.innerHTML = `${outData.length}, ${ingData[0].length}`;

  // Adding description of each daily average (first column) and adding units to second column
  const inputs = ingredients[0].querySelectorAll('.ingr-stat');
  for (let i = 1; i < inputs.length; i++) {
    // starting at calories (that's the 2 and i - 2)
    const { placeholder } = inputs[i];
    const desc = placeholder.slice(0, placeholder.indexOf('('));
    const unit = placeholder.slice(
      placeholder.indexOf('('),
      placeholder.indexOf(')') + 1,
    );
    outData[i - 1][0] = desc;
    outData[i - 1][1] += ` ${unit}`;
  }

  // Adding RDIs (third column)
  let RDIs = [`${TDEE}`];
  const macroRDI = getMacroRDIs(age, TDEE);
  for (let i = 0; i < macroRDI.length; i++) {
    RDIs.push(`${macroRDI[i][0]} - ${macroRDI[i][1]}`);
  }
  RDIs = RDIs.concat(getMicroRDIs(age, sex));
  for (let i = 0; i < outData.length; i++) {
    const unit = outData[i][1].substring(outData[i][1].indexOf('('));
    outData[i].push(`${RDIs[i]} ${unit}`);
  }

  // Creating results table
  const table = document.createElement('table');
  for (let i = 0; i < outData.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < outData[0].length; j++) {
      const cell = document.createElement('td');
      cell.innerHTML = outData[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  // Adding headers to results table
  const headers = document.createElement('thead');
  const labels = ['', 'Average Daily Intake', 'Recommended Daily Intake'];
  for (let i = 0; i < labels.length; i++) {
    const header = document.createElement('th');
    header.innerHTML = labels[i];
    headers.appendChild(header);
  }
  table.insertBefore(headers, table.firstChild);

  // Formatting and displaying results
  const showData = document.querySelector('#showdata');
  if (showData.hasChildNodes()) {
    // deletes previous table if exists
    showData.removeChild(showData.firstChild);
  }
  showData.appendChild(table);
}

// Function for opening info bar
function toggleInfo() {
  const info = document.querySelector('#info-section');
  info.style.height = info.style.height === '220px' ? '0' : '220px';
}

function openLogin() {
  const form = document.querySelector('#login-form');
  form.style.display = form.style.display === 'block' ? 'none' : 'block';
}

function showRegister() {
  const register = document.querySelector('#register');
  register.style.visibility = register.style.visibility === show;
}

// Demo data array we will use in all examples
const foods = ['Pizza', 'Tacos', 'Ice Cream', 'Burgers', 'Pasta']

// helper function: will display whatever HTML/text we pass into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  1) listFoods()
     - Use a for...of loop
     - Output all foods into the #out div (as <p> tags or list items)
*/
function listFoods () {
  let html = ''

  for (const food of foods) {
    html += `<p>${food}</p>`
  }

  render(html)
}

/* 
  2) numberedFoods()
     - Use a classic for loop with index
     - Output foods as an ordered list (<ol><li>...</li></ol>)
*/
function numberedFoods () {
  let html = '<ol>'

  for (let i = 0; i < foods.length; i++) {
    html += `<li>${foods[i]}</li>`
  }

  html += '</ol>'
  render(html)
}

/* 
  3) filterFoods()
     - Prompt the user for a letter
     - Loop through foods
     - Only show foods that start with that letter
     - If no matches, display a "not found" message
*/
function filterFoods () {
  const letter = prompt('Enter a letter to filter foods:')

  if (letter === null) {
    return
  }

  const searchLetter = letter.trim().toLowerCase()
  let html = ''

  for (const food of foods) {
    if (food.toLowerCase().startsWith(searchLetter)) {
      html += `<p>${food}</p>`
    }
  }

  render(html || '<p>No foods found.</p>')
}

/* 
  4) forEachFoods()
     - Use foods.forEach()
     - Output each food as a Bootstrap card
     - Cards should be placed in a centered row
*/
function forEachFoods () {
  let html = '<div class="row justify-content-center g-3">'

  foods.forEach(function (food) {
    html += `<div class="col-12 col-sm-6 col-md-4"><div class="card h-100"><div class="card-body text-center">${food}</div></div></div>`
  })

  html += '</div>'
  render(html)
}

// ---- Event listeners (buttons) ----
document.getElementById('btnList').addEventListener('click', listFoods)
document.getElementById('btnNums').addEventListener('click', numberedFoods)
document.getElementById('btnFilter').addEventListener('click', filterFoods)
document.getElementById('btnForEach').addEventListener('click', forEachFoods)

//  ---------------STUDENT WORK SECTION--------------

/* 
  Task 1 — Uppercase List
  -----------------------
  - Use .map() to create a new array with all foods in uppercase
  - Display the results as an unordered list (<ul>)
*/
function uppercaseList () {
  const uppercaseFoods = foods.map(function (food) {
    return food.toUpperCase()
  })

  let html = '<ul>'
  uppercaseFoods.forEach(function (food) {
    html += `<li>${food}</li>`
  })
  html += '</ul>'
  render(html)
}

/* 
  Task 2 — Reverse List
  ---------------------
  - Show the foods array in reverse order
  - You may use a backwards loop OR the built-in .reverse()
*/
function reverseList () {
  let html = '<ul>'

  for (let i = foods.length - 1; i >= 0; i--) {
    html += `<li>${foods[i]}</li>`
  }

  html += '</ul>'
  render(html)
}

/* 
  Task 3 — Random Food Picker
  ---------------------------
  - Use Math.random to pick a random food from the array
  - Display it in a Bootstrap card with a heading like "Today's Pick"
*/
function randomFoodPicker () {
  const randomIndex = Math.floor(Math.random() * foods.length)
  const pickedFood = foods[randomIndex]
  render(`<div class="card mx-auto" style="max-width: 24rem;"><div class="card-body text-center"><h2 class="h5 card-title">Today's Pick</h2><p class="card-text">${pickedFood}</p></div></div>`)
}

/* 
  Task 4 — Word Lengths
  ---------------------
  - Loop through each food in the array
  - Count the number of characters in each one
  - Display results in the format: Food — X letters
*/
function wordLengths () {
  let html = '<ul>'

  for (const food of foods) {
    html += `<li>${food} — ${food.length} letters</li>`
  }

  html += '</ul>'
  render(html)
}

// ---- Event listeners for the new buttons ----
// (Make sure to add matching buttons in index.html)
document.getElementById('btnUppercase').addEventListener('click', uppercaseList)
document.getElementById('btnReverse').addEventListener('click', reverseList)
document.getElementById('btnRandom').addEventListener('click', randomFoodPicker)
document.getElementById('btnLengths').addEventListener('click', wordLengths)

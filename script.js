
// Part 1: Basics


// Variables & conditionals example
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = prompt("Enter your age:"); // user input
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult!";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "You are a minor!";
  } else {
    document.getElementById("ageResult").textContent = "Invalid input.";
  }
});


// Part 2: Functions


// Function 1: Calculate total
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(50, 3); // Example: 50 x 3
  document.getElementById("totalResult").textContent = "Total: $" + total;
});

// Function 2: Toggle text visibility
function toggleText() {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

document.getElementById("toggleTextBtn").addEventListener("click", toggleText);


// Part 3: Loops

// Example 1: For loop
document.getElementById("showNumbersBtn").addEventListener("click", function () {
  let list = document.getElementById("numbersList");
  list.innerHTML = ""; // Clear before appending
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// Example 2: While loop countdown
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdown = 5;
  let display = document.getElementById("countdownDisplay");
  display.textContent = "";

  while (countdown >= 0) {
    display.textContent += countdown + " ";
    countdown--;
  }
});


// Part 4: DOM Manipulation


// Change background color
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

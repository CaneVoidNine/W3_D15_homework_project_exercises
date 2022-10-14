/* JS EXERCISES

21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete the email property from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string from the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/

let x = "John";
let y = "Doe";

console.log("John <> Doe");

const user = {
  name: "Cane",
  surname: "Voidnine",
  email: "canevoidnine26@gmail.com",
};

delete user.email;
console.log(user);

let myArray = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
console.log(myArray);

const randomArray = [];
for (let i = 0; i < 100; i++) {
  let random = Math.floor(Math.random() * 100);
  randomArray.push(random);
}
console.log(randomArray);

const minAndMax = function () {
  for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100);
    randomArray.push(random);
  }
  console.log(Math.max(random) + " " + Math.min(random));
};

let firstArr = [];
for (let i = 0; i < 10; i++) {}
let secondArr = [];

let arrOfArr = [];
arrOfArr.push(firstArr);
arrOfArr.push(secondArr);
console.log(arrOfArr);

let ar1 = ["one", "two", "three"];
let ar2 = ["one", "two", "three", "four"];
const longestArr = function (ar1, ar2) {
  if (ar1.length > ar2.length) {
    return "first array is longer";
  } else {
    return "second array is longer";
  }
};
let param1 = [1, 2, 3];
let param2 = [1, 2, 3, 4];
const sumNumber = function (param1, param2) {};

/* 31) Get the element with an id of "container" from the page
        32) Get every <td> element from the page
        33) Use a loop for printing the text inside of every <td> element in the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add a class of "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a unordered list
        40) Write a function to empty a list 
        */
const tdElements = function () {
  const cont = document.getElementsByClassName("container");
  const tdNode = document.getElementsByTagName("td");
  for (let i = 0; i < tdNode.length; i++) {
    tdNode[i].innerText = "kek";
  }
};

const hChange = function () {
  const headin = document.querySelector("h1");
  headin.innerText = "New Title.";
};

function addRow() {
  let tableNode = document.getElementById("table");
  let row = tableNode.insertRow();
  row.innerText = "New row here";
}

function classChange() {
  for (let tr of document.querySelector("#table")) {
    tr.classList.add("test");
  }
}

function changeBgrd() {
  redish = document.querySelectorAll("a");
  for (i = 0; i < redish.length; i++) {
    redish[i].style.backgroundColor = style.backgroundColor.red;
  }
}

window.onload = function () {
  console.log("Page should be loaded");
};

const addNewListItem = function () {
  const liNode = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.innerText = "New List item";
  liNode.appendChild(newLi);
};

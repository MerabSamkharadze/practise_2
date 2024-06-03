// const books = [
//   {
//     title: "Red and Black",
//     janre: "romane",
//     grade: 4.23,
//   },
//   {
//     title: "Three MuSHketers",
//     janre: "romane",
//     grade: 4.22,
//   },
//   {
//     title: "Sherlock Holmse",
//     janre: "detective",
//     grade: 3.23,
//   },
//   {
//     title: "Clown",
//     janre: "adventure",
//     grade: 4.45,
//   },
// ];

// filter

// let book = books.filter((book) => book.title == "Clown");
// let goodBooks = books.filter((book) => book.grade > 4);
// console.log(goodBooks);

//find

// let romanticBook = books.find((book) => book.janre == "romane");
// console.log(romanticBook.title);

// map

// let titles = books.map((book) => book.title);
// console.log(titles);

// // camelCase

// let camelize = (string) =>
//   string
//     .split("-")
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     .join("");
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// const link = document.createElement("p");
// link.innerText = "Hello Merabinho! ";
// link.style.backgroundColor = "green";
// link.style.color = "red";
// document.body.appendChild(link);

const button = document.querySelectorAll(".btn");

button.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.toggle("backgroundColor");
  });
});

const ulEl = document.getElementById("ul");
const inputEl = document.getElementById("input");
const addButtonEl = document.getElementById("addBtn");
const clearButtonEl = document.getElementById("clear");

addButtonEl.addEventListener("click", () => {
  if (inputEl.value === "") return;
  let liEl = document.createElement("li");
  liEl.textContent = inputEl.value;
  ulEl.appendChild(liEl);
  inputEl.value = "";
});

clearButtonEl.addEventListener("click", () => {
  ulEl.innerHTML = " ";
  console.log(ulEl);
});

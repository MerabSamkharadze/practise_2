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

// const button = document.querySelectorAll(".btn");

// button.forEach((item) => {
//   item.addEventListener("click", () => {
//     document.body.classList.toggle("backgroundColor");
//   });
// });

// const ulEl = document.getElementById("ul");
// const inputEl = document.getElementById("input");
// const addButtonEl = document.getElementById("addBtn");
// const clearButtonEl = document.getElementById("clear");
// const formEl = document.getElementById("formElement");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (inputEl.value === "") return;

//   let liEl = document.createElement("li");
//   let deleteLi = document.createElement("button");
//   deleteLi.textContent = "delete";

//   deleteLi.addEventListener("click", () => {
//     liEl.remove();
//   });
//   liEl.textContent = inputEl.value;
//   ulEl.appendChild(liEl);
//   liEl.appendChild(deleteLi);
//   inputEl.value = "";
// });

// clearButtonEl.addEventListener("click", () => {
//   ulEl.innerHTML = " ";
// });

// fetch

// fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
//   .then((responseinfo) => {
//     if (!responseinfo.ok) {
//       throw responseinfo.status;
//     }
//     return responseinfo.json();
//   })
//   .then((responsedata) => {
//     console.log(responsedata);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// xml http request

// const request = new XMLHttpRequest();

// request.open("GET", "https://jsonplaceholder.typicode.com/users");

// request.addEventListener("load", function () {
//   let infoText = this.response;
//   let data = JSON.parse(infoText);
//   console.log(data);
// });

// request.send();

// const request = new XMLHttpRequest();

// request.open("GET", "https://jsonplaceholder.typicode.com/users");

// request.addEventListener("load", function () {
//   console.log(this.responseText);
// });

// request.addEventListener("error", function () {
//   console.log("server error!");
// });

// request.send();
// let arr = [1, 2, 1, 3, 5];
// let newArr = arr.splice(3, 1);
// console.log(arr);
// console.log(newArr);

//////
// const request = new XMLHttpRequest();
// request.open("GET", "https://reqres.in/api/unknown");
// request.addEventListener("load", function () {
//   let response = this.responseText;
//   let responseData = JSON.parse(response);
//   console.log(responseData.data);
// });
// request.addEventListener("error", function () {
//   console.log(error);
// });

// request.send();

///

// fetch("https://reqres.in/api/unknown", { method: "GET" })
//   .then((responseInfo) => {
//     if (!responseInfo.ok) {
//       throw responseInfo.status;
//     }
//     return responseInfo.json();
//   })
//   .then((responseData) => {
//     console.log(responseData.data);
//   })
//   .catch((error) => {
//     if (error === "404") {
//       console.log("page not found");
//     }
//   });

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgb(${this.innerRGB()},${a})`;
  }
}
const m = new Color(255, 67, 89, "tomato");
console.log(m.rgba(0.2));

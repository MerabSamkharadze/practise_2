const books = [
  {
    title: "Red and Black",
    janre: "romane",
    grade: 4.23,
  },
  {
    title: "Three MuSHketers",
    janre: "romane",
    grade: 4.22,
  },
  {
    title: "Sherlock Holmse",
    janre: "detective",
    grade: 3.23,
  },
  {
    title: "Clown",
    janre: "adventure",
    grade: 4.45,
  },
];

let book = books.filter((book) => book.title == "Clown");
let goodBooks = books.filter((book) => book.grade > 4);
console.log(goodBooks);

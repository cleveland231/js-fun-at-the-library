function createLibrary(cityLibrary) {
var libraryObject = {
  name: cityLibrary,
  shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return libraryObject
}

function addBook(library, book) {
  // console.log(library.shelves[book.genre])
return library.shelves[book.genre].push(book)
}


//   console.log(library.shelves.fantasy)
// if (book.genre === "fantasy") {
// library.shelves.fantasy.push(book)
//   } else if
// (book.genre === "fiction") {
// library.shelves.fiction.push(book)
//   } else if
// (book.genre === "nonFiction") {
// library.shelves.nonFiction.push(book)
//   }

function checkoutBook(library, book, genre) {
  // console.log(library.shelves[genre])
for (var i = 0; i < library.shelves[genre].length; i++) {
 if (library.shelves[genre][i].title === book) {
   library.shelves[genre].splice(i, 1);
   return `You have now checked out ${book} from the ${library.name}`
 }
}
return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}






module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return
  } else {
    return reviews.push(review)
  }
}

function calculatePageCount(bookTitle) {
  var titleLetterLength = bookTitle.length
  return titleLetterLength * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
return { title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: genre
  }
}

function editBook(book) {
var newBook = book.pageCount * .75
book.pageCount = newBook
return newBook
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

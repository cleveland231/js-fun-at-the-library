function shelfBook(book, bookShelf) {
if (bookShelf.length < 3) {
  bookShelf.unshift(book)
  return
  }
}

function unshelfBook(book, bookShelf) {
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === book) {
      bookShelf.splice(i, 1)
    }
  }
}

function listTitles(bookShelf)  {
return `${bookShelf[0].title}, ${bookShelf[1].title}, ${bookShelf[2].title}`
}

function searchShelf(bookShelf, title) {
    // console.log(bookShelf[0].title)
  for (var i = 0; i < bookShelf.length; i++) {
    if (bookShelf[i].title === title) {
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

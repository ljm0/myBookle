'use strict';

module.exports = function(app) {
  var Book = app.models.Book;
  var Author = app.models.Author;

  // Book.findById('1', function(err, book) {
  //   if (err) console.log(err);
  //   console.log(book);
  //   console.log('finding authors');
  //   book.authors({}, function(err, authors) {
  //     console.log(authors.length);
  //   });
  // });

  // Author.findById('1077326', function(err, author) {
  //   if (err) console.log(err);
  //   console.log(author);
  //   console.log('finding books');
  //   author.books({}, function(err, books) {
  //     console.log(books.length); // 8
  //     console.log(books[1]);
  //     console.log(books[5]);
  //   });
  // });
};

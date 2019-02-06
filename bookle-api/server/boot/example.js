'use strict';

module.exports = function(app) {
  var Book = app.models.Book;
  var Author = app.models.Author;
  var Customer = app.models.Customer;

  // Customer.findById('e58d89318e0f11155defb5f63a43b64d', function(err, customer) {
  //   customer.collection.create({}, function(err, collection) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('collection created.');
  //       console.log(collection);
  //     }
  //   })
  // });

  // Customer.create({
  //   email: 'haha@haha.com',
  //   password: '123456'
  // }, function(err, customer) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('customer created.');
  //     console.log(customer);
  //   }
  // });

  // var text = 'HARRY';

  // Book.find({}, function(err, books) {
  //   // console.log(books.length);
  //   // console.log('start find');
  //   var result = [];
  //   for (var book of books) {
  //     if (book.name.toUpperCase().includes(text)) {
  //       result.push(book);
  //     }
  //   }
  //   console.log(result.length);
  //   // cb(null, result);
  // });

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

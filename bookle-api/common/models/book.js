'use strict';

module.exports = function(Book) {
  Book.search = function(text, cb) {
    if (!text) {
      cb(null, []);
      return;
    }

    Book.find({}, function(err, books) {
      var matchedBooks = [];

      if (text.startsWith(':')) {
        // tag search
        var searchTag = text.slice(1).toUpperCase();
        for (var book of books) {
          for (var tag of book.tags) {
            if (tag.toUpperCase() === searchTag) {
              matchedBooks.push(book);
              break;
            }
          }
        }
      } else {
        // normal search
        text = text.toUpperCase();
        for (var book of books) {
          if (book.name.toUpperCase().includes(text)) {
            matchedBooks.push(book);
          }
        }
      }

      Book.include(matchedBooks, 'authors', function(err, books) {
        cb(null, books);
      });
    });
  };

  Book.remoteMethod('search', {
    accepts: { arg: 'text', type: 'string' },
    returns: { arg: 'data', type: 'array' },
    http: { path: '/search', verb: 'get' }
  });
};

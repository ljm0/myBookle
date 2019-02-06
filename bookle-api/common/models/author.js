'use strict';

module.exports = function(Author) {
  Author.search = function(text, cb) {
    Author.find({}, function(err, authors) {
      if (!text) {
        cb(null, []);
      }
      text = text.toUpperCase();
      var matchedAuthors = [];
      for (var author of authors) {
        if (author.name.toUpperCase().includes(text)) {
          matchedAuthors.push(author);
        }
      }

      Author.include(matchedAuthors, 'books', function(err, authors) {
        cb(null, authors);
      });
    });
  };

  Author.remoteMethod('search', {
    accepts: { arg: 'text', type: 'string' },
    returns: { arg: 'data', type: 'array' },
    http: { path: '/search', verb: 'get' }
  });
};

import json

def no_duplication(l):
  return len(l) == len(set(l))

with open('book.json', 'r') as f_book, open('author.json', 'r') as f_author:
  books = json.load(f_book)
  authors = json.load(f_author)

  book_ids = [ book['id'] for book in books ]
  author_ids = [ author['id'] for author in authors ]
  
  assert no_duplication(book_ids)
  assert no_duplication(author_ids)

  book_ids = set(book_ids)
  author_ids = set(author_ids)

  book_author_ids = set(sum([ book['authorIds'] for book in books ], []))
  author_book_ids = set(sum([ author['bookIds'] for author in authors ], []))

  assert book_author_ids == author_ids
  assert author_book_ids == book_ids

print('validation passed.')

import json
import requests
from ratelimit import limits
import time

cnt = 0

@limits(calls=10, period=1)
def call_api(url, data):
  global cnt 

  res = requests.post(url, json=data, auth=AUTH)
  cnt += 1
  print(cnt)
  return res.content

URL_ROOT = 'https://b9ad2a3c-35fd-4f85-8402-9fda64fb3f94-bluemix.cloudant.com'
BOOK_URL = URL_ROOT + '/book'
AUTHOR_URL = URL_ROOT + '/author'
USER = 'b9ad2a3c-35fd-4f85-8402-9fda64fb3f94-bluemix'
PASS = 'd6e860c3cbcddc2ada3160d52357a95c5def144c13b67dd4d992995382d2961f'
AUTH = (USER, PASS)

with open('book.json', 'r') as f_book, open('author.json', 'r') as f_author:
    books = json.load(f_book)
    authors = json.load(f_author)

    print('INSERT BOOKS')

    for book in books:
      book['_id'] = str(book.pop('id', None))
      book.pop('authors', None)
      book.pop('authorIds', None)
      book['loopback__model__name'] = 'Book'
      
      try:
        call_api(BOOK_URL, book)
      except:
        time.sleep(1)
        call_api(BOOK_URL, book)

    print('INSERT AUTHORS')
    cnt = 0

    for author in authors:
      author['_id'] = str(author.pop('id', None))
      author.pop('books', None)
      author.pop('bookIds', None)
      author['loopback__model__name'] = 'Author'
      
      try:
        call_api(AUTHOR_URL, author)
      except:
        time.sleep(1)
        call_api(AUTHOR_URL, author)

    books = json.load(f_book)
    authors = json.load(f_author)

    print('INSERT BOOK-AUTHOR RELATIONSHIPS')
    cnt = 0

    for book in books:
      for author_id in book['authorIds']:
        relation = {
          'authorId': author_id,
          'bookId': book['id'],
          'loopback__model__name': 'AuthorBook'
        }

        try:
          call_api(AUTHOR_URL, relation)
        except:
          time.sleep(1)
          call_api(AUTHOR_URL, relation)

data-preprocess
=========

getting books and authors from goodreads API

Dependencies
------------

This package depends on the following packages:

-  xmltodict
-  requests
-  rauth
-  json

Source
------------
getjson.py
- get books and authors data, and save the data into json format

author.json
- author data

```
authors_dic = {
        'id': str(author.gid),
        "name": author.name,
        "nationality": author.hometown,
        "birthday": author.born_at,
        "gender": author.gender,
        "link": author.link,
        "biography": author.about,
        "books": mybooks,
        "bookIds": mybookIds
    }
```

book.json
- book data

```        
book_dic = {
            "id": str(book_number),
            "name": book.title,
            "authors": author_name_list,
            "authorIds": author_id_list,
            "ISBN": book.isbn,
            "rating": float(book.average_rating),
            "publishYear": int(book.publication_date[2]),
            "pages": int(book.num_pages),
            "link": book.link,
            "tags": new_tag,
            "abstract": book.description
        }
```

-goodreads
- goodreads API support
from goodreads import client
import json

api_key = 'KHLmHAfTkiVgp1dWJ6NIZg'
api_secret = 'E4BJLnhY12pREf0Mjd4F1kr4BJHwmSmluOuwF30QM'
gc = client.GoodreadsClient(api_key , api_secret)

book_number = 1
book_list = []
author_list = []
author_id_list = []
#get how many books
while(book_number < 10):
    try:
        book = gc.book(book_number)
        tag = book.popular_shelves
        new_tag = [str(xt) for xt in tag]
        book_dic = {
            "id": int(book_number), #FIXME
            "name": book.title,
            "authors": [author.name for author in book.authors],
            "ISBN": book.isbn,
            "rating": float(book.average_rating),
            "publishYear": int(book.publication_date[2]),
            "pages": int(book.num_pages),
            "link": book.link,
            "tags": new_tag,
            "abstract": book.description
        }
        book_list.append(book_dic)
        for tempAuthorName in [author.name for author in book.authors] :
            author_temp = gc.find_author(tempAuthorName)
            author_id_list.append(author_temp.gid)
        book_number += 1
    except:
        book_number += 1

#delete repeat author
new_author_id_list = list(set(author_id_list))
for author_id in new_author_id_list:
    author = gc.author(author_id)
    author_book = author.books
    new_author_book = [str(xb) for xb in author_book]
    authors_dic = {
        'id': int(author.gid),
        "name": author.name,
        "nationality": author.hometown,
        "birthday": author.born_at,
        "gender": author.gender,
        "link": author.link,
        "biography": author.about,
        "books": new_author_book
    }
    author_list.append(authors_dic)


book_js = json.dumps(book_list, indent=4)
author_js = json.dumps(author_list, indent=4)

with open("book.json", 'w') as f:
    f.write(book_js)

with open("author.json", 'w') as f:
    f.write(author_js)

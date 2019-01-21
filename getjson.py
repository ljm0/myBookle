from goodreads import client
import json

api_key = 'KHLmHAfTkiVgp1dWJ6NIZg'
api_secret = 'E4BJLnhY12pREf0Mjd4F1kr4BJHwmSmluOuwF30QM'
gc = client.GoodreadsClient(api_key , api_secret)

book_number = 1
book_list = []
author_list = []
book_search_dic = {}
author_id_list_all = []
#get how many books
while(book_number < 5):
    try:
        author_id_list = []
        book = gc.book(book_number)
        tag = book.popular_shelves
        new_tag = [str(xt) for xt in tag]
        for tempAuthorName in [author.name for author in book.authors]:
            author_temp = gc.find_author(tempAuthorName)
            author_id_list.append(author_temp.gid)
            author_id_list_all.append(author_temp.gid)
        book_dic = {
            "id": str(book_number),
            "name": book.title,
            "authors": [author.name for author in book.authors],
            "authorIds": author_id_list,
            "ISBN": book.isbn,
            "rating": float(book.average_rating),
            "publishYear": int(book.publication_date[2]),
            "pages": int(book.num_pages),
            "link": book.link,
            "tags": new_tag,
            "abstract": book.description
        }
        book_list.append(book_dic)
        book_search_dic[book.title] = book_number
        book_number += 1
    except:
        book_number += 1

print(book_search_dic)

#delete repeat author
new_author_id_list = list(set(author_id_list_all))
for author_id in new_author_id_list:
    author = gc.author(author_id)
    author_book = author.books
    new_author_book = [str(xb) for xb in author_book]
    print(new_author_book)
    mybookIds = []
    mybooks = []
    for temp_author_books in new_author_book:
        # try:
        #     mybookIds.append(book_search_dic[temp_author_books])
        # except:
        #     pass
        if temp_author_books in book_search_dic:
            # print(author, temp_author_books)
            mybookIds.append(str(book_search_dic[temp_author_books]))
            mybooks.append(temp_author_books)
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
    author_list.append(authors_dic)
    # "books": new_author_book,

book_js = json.dumps(book_list, indent=4)
author_js = json.dumps(author_list, indent=4)

with open("book.json", 'w') as f:
    f.write(book_js)

with open("author.json", 'w') as f:
    f.write(author_js)

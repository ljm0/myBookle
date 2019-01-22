from goodreads import client
import json

api_key = 'KHLmHAfTkiVgp1dWJ6NIZg'
api_secret = 'E4BJLnhY12pREf0Mjd4F1kr4BJHwmSmluOuwF30QM'
gc = client.GoodreadsClient(api_key , api_secret)

# book_number = 1
book_number = 1
book_list = []
author_list = []
book_search_dic = {}
all_book_title = []

# author_id_list_all = []
#get how many books
while(book_number < 1100):
    try:
        author_id_list = []
        author_name_list = []
        book = gc.book(book_number)
        tag = book.popular_shelves
        new_tag = [str(xt) for xt in tag]
        for tempAuthorName in list(set([author.name for author in book.authors])):
            author_temp = gc.find_author(tempAuthorName)
            author_id_list.append(author_temp.gid)
            # author_id_list_all.append(author_temp.gid)
        author_id_list = list(set(author_id_list))
        for temp_a in author_id_list:
            author = gc.author(temp_a)
            author_name_list.append(author.name)
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
        if book.title not in all_book_title:
            book_list.append(book_dic)
            book_search_dic[(book_number,book.title)] = author_id_list
        all_book_title.append(book.title)
        book_number += 1
    except:
        book_number += 1

#delete repeat author
# new_author_id_list = list(set(author_id_list_all))

# author_book_dic = dict().fromkeys(new_author_id_list, [])

author_book_dic = {}
for key, value_list in book_search_dic.items():
    for value in value_list:
        author_book_dic.setdefault(value, []).append(key)

new_author_id_list = []
for a_key in author_book_dic.keys():
    new_author_id_list.append(a_key)

for author_id in new_author_id_list:
    author = gc.author(author_id)
    author_book = author.books
    new_author_book = [str(xb) for xb in author_book]
    mybookIds = []
    mybooks = []
    if author_book_dic.get(author_id):
        mybooks = [books[1] for books in author_book_dic[author_id]]
        mybookIds = [str(books[0]) for books in author_book_dic[author_id]]
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

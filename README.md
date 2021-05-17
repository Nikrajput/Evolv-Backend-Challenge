# Evolv-Backend-Challenge

# I have used mongodb because

Schema less − MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.

Structure of a single object is clear.

No complex joins.

Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.

Ease of scale-out − MongoDB is easy to scale.

Conversion/mapping of application objects to database objects not needed.

Uses internal memory for storing the (windowed) working set, enabling faster access of data



# url collections

# about home page

show all blog -> GET /

# about blog
adding a post -> GET /post/add_
adding a post -> POST /post/add_
show a single post -> GET /post/show/:id_
editing a post -> GET /post/edit/:id_
editing a post -> PUT /post/edit/:id_
deleting a post -> DELETE /post/delete/:id

# about comment on a blog

adding a comment -> GET /:id/comment/add_
adding a comment -> POST /:id/comment/add_
editing a comment -> GET /:id/comment/:c_id/edit_
editing a comment -> PUT /:id/comment/:c_id/edit_
deleting a comment -> DELETE /:id/comment/:c_id


# about comment on a comment

adding a comment -> GET /:id/comment/:c_id/add_
adding a comment -> POST /:id/comment/:c_id/add

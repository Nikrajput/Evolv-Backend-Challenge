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
adding a post -> GET /post/add <br />
adding a post -> POST /post/add <br />
show a single post -> GET /post/show/:id <br />
editing a post -> GET /post/edit/:id <br />
editing a post -> PUT /post/edit/:id <br />
deleting a post -> DELETE /post/delete/:id

# about comment on a blog

adding a comment -> GET /:id/comment/add <br />
adding a comment -> POST /:id/comment/add <br />
editing a comment -> GET /:id/comment/:c_id/edit <br />
editing a comment -> PUT /:id/comment/:c_id/edit <br />
deleting a comment -> DELETE /:id/comment/:c_id


# about comment on a comment

adding a comment -> GET /:id/comment/:c_id/add <br />
adding a comment -> POST /:id/comment/:c_id/add

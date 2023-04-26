# Blog CREATE AND UPDATE API using Nodejs, Express.js, and MongoDB

This is a simple web api development that provides Create and Update functionality for Blogs. It is built using Express.js and MongoDB.

## Prerequisites

To run this application, you will need to have the following software installed on your system:

- Node.js (19.0.0 or latest)
- MongoDB (1.36.2 or latest)

## Installation

1. Install the dependencies.

```md
npm install
```

1. Run the APIs Project.

```md
npm start
```

5. Open your client (Postman) and go to `http://127.0.0:5000/health` to see the application running.

## Data Model

The data model for the Blog is defined in the following schema:

```js
// Required Packeges
let mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: true },
    category: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true, versionKey: false }
)

const Blog = mongoose.model('Blog', blogSchema)

// Export User Model
module.exports = Blog
```

## Functionalities

### Adding a Blog

POST:`http://127.0.0.1:5000/api/v1/blogs/create-one/:blogID`

- Blog title, text and author is required and thease fields must be string.
- category: it is an optional field, if available should be and array, each array item should be an object

### Updating a Blog

PUT: `http://127.0.0.1:5000/api/v1/blogs/update-one/:blogID`

- All data is optional but if supplied from client every data should follow actual formats.

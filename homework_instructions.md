# Node Express Handlebars - Burger Eats app


In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 

MySql
Node
Express
Handlebars
ORM

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
* All the burgers are stored in a database, whether devoured or not.

### Heroku Link

Below is my depolyed site through heroku. Due to functionality that is not built into Github I used heroku to deploy my app and jawdb to act as a third party database.

https://sheltered-brushlands-63935.herokuapp.com/


#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

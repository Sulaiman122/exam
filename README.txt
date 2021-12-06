1- (index.js) Error: wrong path at line 5 require("../db")
    Fix: edit path to: require("./db");
2- (db/index.js) Error: wrong package installed (mongose), we should install (mongoose)
3- (routers/controllers/todos) Error: wrong path required "./../../db/models/todos", Fix: we remove last letter
4- (db/models/todo) Error: wrong package required "mongose", Fix: "mongoose"
5- (db/models/todo) Error: exporting mongoose.module => Fix: mongoose.model
6- (routers/controller/todos.js) Error: Error: exports with 's'
7- (index.js) Error: morgan was not required on top
8- (db/models/todo) Error: task type: Boolean, Fix: type: String
9- (router/controller/todo) Error: change todo to task as in schema
10- (db/index.js) Error: dotenv was not required
11- (router/route/todo.js) put endpoint change to /todo/:id
12- (index.js) cors should be cors()

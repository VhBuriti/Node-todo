# Node-todo

This is a simple Todo App, made using React.Js, Node/Node Express and MongoDB.

## Setting Up

To install all dependencies, run:

```
    npm run install-dependencies
```

Then, to boot up both Node.Js backend and React.Js front-end, run:

```
    npm run start
```

For this project, inside the server folder, you will need to create a .env file, containing your desire port or the default that I used, the 5000 and set up
your MongoDB connection URL, as the following format:
```
MONGODB_URL=ConnectionURL/todosdb
PORT=PORT
```

**If you want, you can also start both server and client separately**

Inside the client folder:
`npm start`

Inside the server folder:
`npm run dev`
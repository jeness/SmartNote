# SmartNote

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.


## Introduction
![](https://github.com/Shanfang/SmartNote/blob/master/smart-note/src/assets/icons8-Pen.png)

SmartNote is a notes app based on Angualr 4, MongoDB and Node.js developed by Group Augo.


## Features
- Accounts management: sign in, sign out.
- Basic notes: Create, Retrieve, Update, Delete
- Todo: create a todo, complete a todo, delete a todo and view all todos.
- Markdown notes: create a markdown note with its title, tag and content.
- Search notes: search note by keyword or tag
- Tag notes: create tags and classify notes by tag.
- URL notes: generate note from URL automatically.
- Archive note: view all archived notes.


## Development 

1. Before run our application, you need to install mongodb.
- Open the Terminal app and type `brew update`.
- After updating Homebrew `brew install mongodb`
- After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running `mkdir -p /data/db`
- Make sure that the /data/db directory has the right permissions by running

``sudo chown -R `id -un` /data/db``
- Run the Mongo daemon, in one of your terminal windows run `mongod`. This should start the Mongo server.
- Run the Mongo shell, with the Mongo daemon running in one terminal, type `mongo` in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.
- To exit the Mongo shell run `quit()`
- To stop the Mongo daemon hit `ctrl-c`

2. Run `mongod` to start the service after installation.

3. Before starting the application, you need to install some dependencies. Please reference the next section for details.
Run `npm run start` to start the application. Navigate to `http://localhost:4300/`. The app will automatically reload if you change any of the source files.

4. For Server part, go to folder server by `cd server/`.
Run `npm install` and `npm run dev`.


## Dependencies
For markdown directives, you need to install some libraries.

Install SimpleDEM and Highlight for markdown note features.

1. navigate to app root directory(./smart-note), run `npm install simplemde --save` and `npm install angular-highlightjs --save` to install dependencies for markdown functionality.

2. navigate to ./server, run `npm install nodemon --save`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Screenshots

### Login
![](https://github.com/Shanfang/SmartNote/blob/master/screenshots/login%20in.png)

### Todo
![](https://github.com/Shanfang/SmartNote/blob/master/screenshots/todo.png)

### Markdown Note
![](https://github.com/Shanfang/SmartNote/blob/master/screenshots/markdown%20note.png)

### Tag
![](https://github.com/Shanfang/SmartNote/blob/master/screenshots/tag.png)

### About
![](https://github.com/Shanfang/SmartNote/blob/master/screenshots/about.png)


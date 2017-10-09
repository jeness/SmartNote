## What is it?
Back end of Smartnote, including request from front end, route, database operation and return result to front end.

	
## Packages

- Koa2 as the Middleware
- Database: Mongodb-mongoose


## How to start

- node.js >= 7.6
- install mongodb 
- robomongo（newly name as Robo 3T ）（a GUI tool of mongodb）
- mongodb create a new database named node-login (to store user info of Smartnote) and run mongodb;
- npm install
- npm run build 
- node app (or npm start) and visit localhost:3003/home

## Content

	node-login
		|-- components	   			//components of pages
			|-- LoginTab.js
			|-- RegisterTab.js
		|-- controller          //route callback
			|-- user-info.js
		|-- models     			//user model
			|-- user.js
		|-- pages					//javascript for pages
			|-- home
				|-- home.js
				|-- index.js
			|-- main
		|-- routes					
		|-- static					
		|-- tools					//webpack construction files
		|-- views					//template for pages
		|-- .babelrc
		|-- app.js					//entry file
		|-- config.js				//database config file
		|-- package.json
		

# nodeangular-todo

Sample Application for nodejs angular js

prerequisite:
install npm and node js

Database Setup

open server.js file and do the follwoing configarations

var mysqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'node1'
});

sample schema here : node1_database.sql

once you did the ablove steps
navigate to the project folder and do
npm install 

it is same as php's composer update/intall

Running application
----------------------------------
To start server
node server.js

open browser
	http://localhost:1337/

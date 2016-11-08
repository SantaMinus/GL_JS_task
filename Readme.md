# JS API reader

## Description
The project contains API and a client.

Every 4 seconds the client gets a JSON list of objects icon information from APIin the following format:

icon - icon number
name - short title
cap1 - short description
cap2 -  short description
number1 - integer
number2 - integer

At every step the client shows one table with an icon:
 
| icon1  |        |
|--------|--------|
| name   |        |
| cap1_1 | cap2_1 |
| num1_1 | num2_1 |

## Requirements

### For running API:
 - Rails
 - run the Rails server:
	> rails s

### For running client:
 - npm
 - sprintf-js installed
 - browserify installed
 - run the console command:
	> browserify api_reader.js -o bundle.js
 - open api_reader.html in a browser


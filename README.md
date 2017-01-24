# mini password bruteforce time calculator
A mini web app that calculates the estimated time it would require to brute force a given password.

### Technologies used
- Node.js
- Express.js
- Templating engine Handlebars.js

### Requirements
- [node.js and npm](http://nodejs.org) (comes bundled together)

### Setup
1. clone repo
2. run ```npm install``` to install required dependencies
3. run ```node app``` to start app
4. open [localhost:8080](http://localhost:8080) in your browser

Note: you can adjust the listen port in config.js

### Configuration

In the config.js you can configure:
- App listen port
- Title of app
- Estimated computation speed of a brute-force machine 
- Regex tests for certain character groups and their impact on possibilities per character 

### Tests 
Tests for the brute force calculation can be run using ```node app test```.

### About this simulation
The simulation detects which character groups are included in your password and assumes that a brute forcer would only use these character groups to guess the password. 

E.g. if the given password was 'abC' it's assumed that the brute-forcer would only test for lower and uppercase characters.

This way, a real brute forcer would likely tale longer because it would check for more characters than actually needed.

Note that there are other methods - like dictionary attacks - that may deliver way faster guessing results.

### Author 
[schiru](http://schiru.com)

### Licence
MIT

# Boilerplate with ReactJs over NodeJS and Webpack-dev-server
The purpose of the project is to provide a basic working environment with:
- ReactJs 
- Java7 
This is a starting point for project using those technologies. 
To make development easier, we are using
- JSX
- ES6
- Embeded less style
- Java 7
This configuration enables live reload on both js and less files.

## Requirement
You need to have installed:
- npm
- webpack
- webpack-dev-server
- node
- Java 7
- maven

## Set-up

###Java
To build the java project and import the dependencies, run:
```bash
$ mvn clean install 
```

###ReactJs
To import all required modules, after cloning the github project, run in the root directory :
```bash
$ npm install 
```
To build the project : 
```bash
$ webpack 
```
This command generates a bundle file in the public directory: index.js

## Run in dev mode
The **App server** is running on **port 8080** managed by the main() of class Server in the java project.
If you want to enable the **live reload**, you need to run a webpack-dev-server and access the **port 8081**
To run the dev server go to src/main/resources and run:
```bash
$ node server.js 
```

Servers can then be reached with urls  
```
localhost:8080 //App server
localhost:8081 //Dev server handling live reload on save event
```

# Todo-list-MERN
Todo Listing app using MERN stack, this is my first project using MERN stack, here i used react as a frontend and nodejs as a backend with mongodb as a database.here
i used Axios as http client for fetching data from nodejs server. By doing this project, i get to know about major fundamental concepts of both frontend and backend and
how both alongside work together. the key takeaways i learned through this project is url management, CORS,manymore. i will now explain some brief working concepts behind 
this application.This website is made to use it on localhost, i will explain how to setup this application in localhost.Here's the preview of web page.

## Technologies used
* React(frontend framework)  
* Nodejs(backend)  
* Express(framework for Nodejs)  
* Mongodb(Database)  
* Mongoose(Mongodb nodejs driver)  
* Axios(http client to fetch data from nodejs)

## Setting up the webpage
First create "mongodb" directory and in that create other directory named "data", then open cmd prompt or terminal in "monggodb" and run the following command
<code>mongod --dbpath=data --bind_ip=127.0.0.1</code>, what this is doing is, it will setup the mongodb database in this directory and store the following documents inside
data folder, we can access the following data through nodejs server.

next open two different terminals in server and client folder and run <code>npm start</code>, this will serve up the webpage.

### Snippets of webpage
for adding tasks to webpage, simply type it in the input, and press add button
![screencapture-localhost-3000-2022-07-18-00_38_38](https://user-images.githubusercontent.com/76170871/179421422-6b854ff9-b4a1-410a-aaa3-19562065a548.png) 
for updating the already added tasks, simply click the update button and edit the content in the input bar.
![screencapture-localhost-3000-2022-07-18-00_39_23](https://user-images.githubusercontent.com/76170871/179421668-1fe40e86-dd01-40b9-ba09-2018c682f15f.png)
for deleting the content, you can simply click the delete button.


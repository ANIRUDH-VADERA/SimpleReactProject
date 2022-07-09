# SimpleReactProject
A Simple landing Page with backend connectivity in React

How To Compile and Run Code: 

  1. Download these files from the GitHub on your local computer
  2. Open hyper / command prompt or any terminal of your choice
  3. We have 2 parts in our file structure 
      The client part act as frontend 
      The server Part act as backed
  4. On your server directory, Create a .env file with parameters written as PORT=5000 in the file.
  5. On your terminal navigate to client directory and run the command npm i / npm install , Then to start your project at localhost:3000 run npm start
  6. Then navigate to your server directory and run nodemon app.js to run your server at localhost:5000
  7. We have use mongoDB for our backend, In order to run that you must have mongoDB client locally installed on your pc.
  8. Now to run mongodb client, Open a new terminal tab , Run mongod command , Then on a new window/ tab run mongo
  9. In order to see the data saved on the window u ran the mongo command 
      Type use simpleFormDB
      Then run db.posts.find()

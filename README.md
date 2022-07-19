# Intro
This is a test app which uses GrpahlQL in a node server with a apollo client in the front end react app
The data being used is from a api called [spacex](https://docs.spacexdata.com/#eda45a06-9f05-40f1-a333-028f647ba797).

# Resources
Below are some resources I used to complete this application. 

### Guide
I have used the following as resources for the app - [Traversy Media Part 1](https://www.youtube.com/watch?app=desktop&v=SEMTj8w04Z8&feature=youtu.be) & [Traversy Media Part 2](https://www.youtube.com/watch?v=-XwkFm5a9lw)

### API
The URL for the api is [launches](https://api.spacexdata.com/v3/launches) & [launch](https://api.spacexdata.com/v3/launches/{{flight_number}})

### Axios
I have used Axios for the API to the spacex api endpoint

### GraphQL
This is the backend query lanuage that enables us to pull the required data from the api endpoint.

### Concurrently
Used to enable us to run both the node server on port 4000 and the React app on port 3000 at the same time.

### CORS
I used the [CORS](https://www.npmjs.com/package/cors) package on the application as I was having a issue when I was trying to use my frontend app port to access my backend server through a sepreate port. The code implementation was done in the server file. 

# Running The App
To run the app simply pull down the repo and in the main directory run the command **npm i**. 
This needs to be done both in the **main directory** and within the **client folder**.
You can choose to use a .env file but the nature of the app I haven not done this.

## Running app locally
To run the the app locally you simply run the command **npm run dev** and nodemon and react is triggered to run the app locally at the same time. 

# Styling
For the styling we will be using the theme [Cyborg](https://bootswatch.com/cyborg/) from Bootswatch. 

# Need Help?
If you are learning Grpahql or Apollo client get in touch, I would love to share resource. [email](mailto:am.inspiredsolutions@gmail.com)

## Challanges
With any project nothing really goes exactly to plan. Below are just some hurdles I came across:
<ul>
    <li>CORS, I was stuck on were my components Launches was returning undefined for my data. Finally found out that it was the URL I was using in the app.js to get the graphql was not working, it was returning a 404.</li>
</ul>


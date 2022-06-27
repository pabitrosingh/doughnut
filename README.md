
# Steps to getting started

- Clone the Repo.
- Install all depedency `dotnet restore`
- Install all Node.js modules if not dont `npm install`
- Set up your Database
- Supply the required database connection string
- Build the app `dotnet build`
- Run the app `dotnet run`

# Requirement

- .Net Core SDK 5.0
- Node.JS
- MongoDB local / Cloud

# To run mongo DB in your local docker

`docker run -p 27017:27017 --name my-mongo -d mongo:latest`

- connect to your local mongo db from compass `mongodb://localhost:27017`
- create a Database `doughnut` and a Collection `doughnut`

# to Build docker image

`docker build -t doughnut .`

# to to deploy the image into docker

`docker run -d -p 5000:80 --name doughnut doughnut`

# Access the app

`http://localhost:5000/`

# Screenshots

![Home Page](https://github.com/pabitrosingh/doughnut/blob/master/Documents/HomeScreen.png)

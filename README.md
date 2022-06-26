
# to Build docker image

`docker build -t doughnut .`

# to to deploy the image into docker

`docker run -d -p 5000:80 --name doughnut doughnut`

# Access the app

`http://localhost:5000/`

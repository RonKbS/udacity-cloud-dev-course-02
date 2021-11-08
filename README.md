# Udagram Image Filtering Microservice


[The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

### TO USE HOSTED ENDPOINT;
`end_pint/filteredimage/?image_url=https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80`

### LOCALLY RUNNING ENDPOINT CAN ALSO WORK WITH LOCAL FILES
`http://localhost:8082/filteredimage?image_url=path_to_file.png`

#### validation can be seen quickly from local running server. online images take a while to resolve

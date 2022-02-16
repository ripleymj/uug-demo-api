# UUG Web Apps - API Demo
This repository captures the final result of our REST API code-along from last week.

## 1. Installing
To run this API locally, fork or clone the repo and inside your working directory run `npm install`.

Make sure you have [Node JS](https://nodejs.org/en/download/) installed already.

## 2. Running the API
Once the project is installed, run `npm start` in your working directory.

This should start the web server at `http://localhost:3000`.  You should have two working endpoints:
1. [http://localhost:3000/](http://localhost:3000) - Directory of all endpoints.
2. [http://localhost:3000/earthquakes/latest](http://localhost:3000/earthquakes/latest) - JSON endpoint showing data from the latest earthquake in the U.S.

## 3. Deploying
This repository can be deployed quickly using the DigitalOcean App Platform.

```yaml
name: uug-demo-web-app
region: nyc
services:
- environment_slug: node-js
  github:
    branch: main
    deploy_on_push: true
    repo: funkybunch/uug-demo-api
  http_port: 3000
  instance_count: 1
  instance_size_slug: basic-xxs
  name: uug-demo-api
  routes:
  - path: /api
  run_command: npm start
```

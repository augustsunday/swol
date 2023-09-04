# SWoL

SWoL - the Simple Workout Log - is an exercise tracking web app

## Features
* Create, edit, and delete exercises
* Input validation and error reporting
* MongoDB/Express API
* React-based SPA user interface

## Prerequisites
* Node.js
* npm
* a mongodb database and credentials
 
## Installation
You will need to install and start both the _exercise-api_ and _exercise-ui_ components in that order.
The UI will not start properly without an instance of the API running first!
### API Setup
1. Create a .env file in /exercise-api - See [/exercise_api/env_example]() for a template
* Specify the port number the api will run on
* Include the mongodb login uri (see mongodb documentation for details)
2. Open a terminal and navigate to /exercise-api and run the following commands...

```bash
npm install
npm start
```
3. You should see a console message indicating a successful connection to MongdoDB, as well as the port number of the API
4. API is now ready to accept connections. 
5. (Optionally, at this point you can run some initial unit tests.)

### UI Setup
1. Create a .env file in /exercise-ui - See [/exercise_ui/env_example]() for a template
* Specify the port number the ui will run on
2. Update the "proxy" line in /exercise-ui/package.json to reflect the url/port that the _API_ (not the UI) is accepting connections on.
3. Open a terminal and navigate to /exercise-api. Run the following commands...

```bash
npm install
npm start
```
4. You should see a console message indicating a successful start and providing the UI URL
## Testing
There are some basic unit tests for the API in [/exercise-api/test-requests.http]()

These tests are meant to be run on an empty database and may not function properly when used on a 

## Roadmap
* User authentication using Auth0 (currently in development - see branch)
## License
Copyright &copy; Colin Cummins 2023

## UI Example 

<img width="1458" alt="swol_readme" src="https://github.com/augustsunday/swol/assets/84826067/dedf46c1-5fc6-451b-91d9-f51fb0ca6b51">

#  BackEnd task for Radio 2000

The API backend for Radio 2000. 
Created using Node.js with the Express framework. 
Deployed to the web using [Vercel (check it out)](https://radio-2000-back-end.vercel.app/).
Data access with Firestore database.

## Tasks:
- [x] API endpoint for List of radio stations
- [x] API endpoint for singular radio station
- [x] API endpoint for obtaining details about a user
- [x] Support the API with a database
- [x] Implement the endpoints as either a REST API or a GraphQL API
- [x] Mechanism or tool available for adding data into the database
- [ ] Introduce a migration tool for managing the database schema
- [x] Ensure the steps are outlined for how to run the application
- [ ] Provide an openAPI or swaggerhub schema file explaining your API
- [ ] Unit test your application
- [x] Add documentation
- [x] Deployed online

## Running the application:
### Online:
- Project deployed to Vercel, accessible at [https://radio-2000-back-end.vercel.app/](https://radio-2000-back-end.vercel.app/)

### Local:
- Run `node .` or `node index.js` in the directory (Radio-2000-BackEnd folder) using terminal/command.

## Using the application:
if running locally, you will see a response in terminal with the address the server is accessible from ([default http://localhost:8080/](http://localhost:8080/)).  [Click here if you want to use it online without having to run the server](https://radio-2000-back-end.vercel.app/). 
On the landing page you can see the following available endpoints:
- /getAllStations
- /getStation/:name
- /getAllUsers
- /getUser/:name
- /setUser

### Description of endpoints
- `/getAllStations` : Retrieves all station data from Firestore database
- `/getStation/:name` : Retrieves single specified station data from Firestore database
- `/getAllStations` : Retrieves all user data from Firestore database
- `/getStation/:name` : Retrieves single specified user data from Firestore database
- `/setUser` : To add data, use a API development tool like POSTMAN to pass data in the body as JSON with the endpoint request, for example:
`{
    "name": "tom",
    "email": "tom@rad.com"
}`

## Making changes/contributions:
- No guidlines currently set
- `/setUser` can be adapted to add other data, for example stations


## Testing:
- Local server has been tested and working on Windows 10, macOS 12.
- Vercel deployment tested on Windows (Chrome), macOS 12 (Safari) and iOS 16 (Safari)
- Unit testing required

## Tools used:
- Node.js: Backend JavaScript server environment.
- Express: Node web framework for building web applications.
- Firebase/Firestore: Online database used to store stations and users.
- Vercel: Deploying the application online.
- POSTMAN: To test data.

## Resources:
- Deploying Express API to Vercel as serverless function: [https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel](https://shadowsmith.com/how-to-deploy-an-express-api-to-vercel)
- Accessing Firestore database and retrieving data: [https://firebase.google.com/docs/firestore/query-data/get-data#node.js](https://firebase.google.com/docs/firestore/query-data/get-data#node.js)
- Data queries, requesting specific data from Firestore: [https://cloud.google.com/firestore/docs/query-data/queries#array_membership](https://cloud.google.com/firestore/docs/query-data/queries#array_membership) 
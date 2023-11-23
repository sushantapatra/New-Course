## Install Packages
``` 
$ npm i express
$ npm i nodemon
$ npm i body-parser
$ npm i morgan
$ npm i colors
```
* Express => Built a server and api 
* Nodemon => Automatic restarting of application on watchmode.
* body-parser => JSON Property reader
* Morgan => HTTP request logger middleware for node.js
* colors => get color and style in your node.js console (github.com/Marak/colors.js)


## Express Middlewares
##### `express.static: This middleware serves static files, such as HTML, images, and stylesheets, from a specified directory. For example:
```
app.use(express.static('public'));
```
This line serves static files from the "public" directory.
##### express.json: This middleware parses incoming JSON payloads and makes them available in req.body. It is automatically included when you use app.use(express.json()).
```
app.use(express.json());
```
##### express.urlencoded: This middleware parses incoming requests with URL-encoded payloads and makes them available in req.body. It is automatically included when you use app.use(express.urlencoded({ extended: true })).
```
app.use(express.urlencoded({ extended: true }));
```

##### express.Router: Express routers are a type of middleware that allow you to group route handlers together. They help organize your routes into separate files or modules.
```
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello from the router!');
});

app.use('/api', router);
```



### 1. Logging Middleware:
```
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
app.use(loggerMiddleware);
```
This middleware logs the timestamp, HTTP method, and URL for every incoming request.

### 2. Body Parsing Middleware:
```
const bodyParser = require('body-parser');
// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
```
These middlewares parse incoming request bodies in JSON and URL-encoded formats, making the data accessible through req.body.

### 3. CORS  Middleware:
```
const cors = require('cors');
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
```
This middleware allows or restricts cross-origin resource sharing, which is essential for security when making requests from one domain to another.

### 4. Error Handling Middleware:
```
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

```
This middleware handles errors in the application. When an error occurs, it logs the error stack and sends a generic error message to the client.

### 5. Authentication  Middleware:
```
const authenticateMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
    }

    // Validate the token and set user information on req.user
    // ...
    next();
};
app.use(authenticateMiddleware);

```
This middleware checks for a valid authentication token in the request header. If the token is missing or invalid, it sends a 401 Unauthorized response.

### 6. Session Middleware:
```
const session = require('express-session');

// Use sessions for tracking user authentication status
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
}));

```
This middleware sets up session handling for your application. It uses a secret key to sign the session ID cookie and can store user-specific data between requests.

### 7. Custom  Middleware:
```
const customMiddleware = (req, res, next) => {
    // Custom logic
    next();
};
app.use(customMiddleware);
```
You can create your own custom middleware functions to perform specific tasks or validations based on your application's requirements.

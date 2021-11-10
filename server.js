var connect = require('connect');  // Importing Required Modules
var serveStatic = require('serve-static'); // Importing Required Modules

connect()
    .use(serveStatic(__dirname))
    .listen(8080, () => console.log('Server running, Star Rhys on GitHub!')); // Console Log
       // Change Port Here


       // Read Github Read Me For More Details

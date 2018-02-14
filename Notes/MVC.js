// MVC

// Model-View-Controller: architectural paradigm. NOT a framework. structure of application will be built in a certain way (model, view, controller)

// Model - Database
// View - Client
// Controller - Server

// Code related to DB - Model;
// code processing info to and from db - controller
// output frontend code - view

// Model
// -adding and retreiving items from DB
// -processing data from or to the database/
// -speaks only with the controller. DOES NOT SPEAK TO VIEWS

// View
// -what users see (frontend)
// -think of HTML/CSS
// -speaks only with controller

// Controller
// -proccesses GET/POST/PUT/DELETE requests
// -all server side logic
// -the middle man
        // -takes info from user
        // -processes info and talks to the DB if needed
        // -receives info from DB
        // -speaks to view to explain presentation to the viewer

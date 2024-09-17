# CampusRide Ideas

## Pages

### Signup Page

- this page would be the first page users would see that would allow people to create an account with their full name, email, and password.
- there would also be a link for users to click on the bottom if they already have an account
- possibly have a database of these accounts so we can use their names when figuring out rides
- can add a "Join Group" button as well

### Login Page

- this page would be the second page uses would see that would route from signup page to the homepage.
- Allows users to login

### Home Page

- this page would be the main page that would also feature the navbar usage
- would allow users to sign up as a driver or a passenger
- has access to view events, create a group/join a group

### Events Page

- this page would be accessible via navbar on the homepage and would list out all the events for the groups you are in.
- would have filters to show only events from group A or events only from group A and B, etc.
- use the groupId to acccess this
- have a way for users to sign up as a driver or passenger for each event

## Components

### DriverForm component

- this page would be the sign up form for users as a driver
  - write your name
  - email address
  - number of spots
  - preferred passengers

### Assignments component

- handles the logic for assigning passengers to drivers

### Navbar component

- the navbar for the homepage
  - has events tab, contact, join group?

### PassengerForm component

- this page would be the sign up form for users as a passenger

## Other

### Group Data Model

- create a data model for groups that would have the `groupName`, `groupId`, `members[]`, and `events[]`

### Graph problem to automatically allocate rides

- get location from the users (both drivers and passengers)
- use an API to convert addresses into coordinates
  - Google Maps Geocoding API
  - OpenStreetMap
- Calculate distance between locations
  - google maps distance matrix api
- Algorithm
  - might use dijkstras to find the shortest path from the driver's location to the passengers
  - may use traveling salesman problem
-

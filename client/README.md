# Pint-Pirate 🍺

### Team Members

- <a href="https://github.com/Kwasiiii">Kwasi</a>
- <a href="https://github.com/walazeidan">Wala</a>

## Project Overview

The task was to make a full stack application in a team of 3 programmers. This was to be a desktop web-app that uses an Express API and must consume it on a React front-end.

## Languages/Technologies Used

- HTML5, CSS3
- SASS, Bootstrap
- JavaScript ES6+
- React
- Node.js, Express.js
- MongoDB
- Axios
- Mapbox GL
- Yarn, NPM
- Git, GitHub
- Font Awesome

## Project Overview 🍺

We decided to build an application that shows UK travel destinations via each cities cheapest pint of beer! Users can sort all cities (on our database) either high-low or low-high. For added user immersion users can also search directly for a city through a search bar.

Additional features include the ability for users to post reviews on each of the cities (only authors of the reviews may delete them), we also added a Map page, where users can discover different UK destinations on a fully interactive map. Users have access to a 'My Profile' page where they can view personal login details. On each selected city page users can also find locations on our to find a certain beer.

All research relating to prices/brand of beer was researched and collated by us.

## Initial Approach to Brief

Promptly after deciding our theme for the full-stack app, we firstly drew wire-frames of what our intended finish product may look like. This helped us to understand how we might break-down different parts of the app into several React components.

Through the use of pseudo-code, we were able to map out the logic/functionality that would bring our design to life.

## The Home Page

On page load the user is met with the Pint-Pirate homepage! Here users can hit the explore button, to be taken to the main cities page, or browse the mock advert tiles, displaying beer related companies/products.

<a href="https://imgur.com/XkcjsSe"><img src="https://i.imgur.com/XkcjsSe.gif" title="source: imgur.com" /></a>

## Secure Routes

In order to use all of Pint-Pirate's features, users must either register or login in with an existing account through the respective form pages.

<a href="https://imgur.com/ojh389w"><img src="https://i.imgur.com/ojh389w.gif" title="source: imgur.com" /></a>

Once logged in, the users are then redirected to the main cities page!

## City List

The main page of the website! Here users are able to sort all cities stored in the database from low -> high and high -> low (sorting by price of each cities cheapest pint!). In addition to this, users are also able to directly search for a desired city!

<a href="https://imgur.com/JYE9xkU"><img src="https://i.imgur.com/JYE9xkU.gif" title="source: imgur.com" /></a>

## Single City Page

After clicking on the desired city the user is then taken to a further page, presenting more in depth information on that city. Here a picture and a bio of the city is available to view. Below this, information on the cities cheapest beer is visible. Finally under this users are able to leave reviews where a calculated average rating is displayed; dynamically updating on review creation or deletion.

<a href="https://imgur.com/4CX3LI0"><img src="https://i.imgur.com/4CX3LI0.gif" title="source: imgur.com" /></a>

## Map Box Integration

One of the coolest features of Pint-Pirate is a fully interactive map where users can search for any location and be taken to it! In this context, users could search for their favourite pubs, or discover further drinking locations in different cities!

<a href="https://imgur.com/dFBVWWI"><img src="https://i.imgur.com/dFBVWWI.gif" title="source: imgur.com" /></a>

## Further Pages

Some further pages include and About page and a Profile page. The former displays information on what languages/technologies were used to build the project and the latter displays a page where users information is mapped through and displayed, content includes the users profile picture and their email and username!

## Challenges

- I think one of the main challenges was being able to present an MVP within the 10 days timeframe including the implementation of Mapbox. This definitely challenged our ability to plan and schedule what work needed to be done and when. This was a great insight into what production may be like in industry.

- I loved the challenge of learning and using 'bcrypt' for the first time to store and hash passwords!
- It was a great experiences getting used to working off of Git development branches when working in a team. This became difficult to adapt to at first but now I feel very comfortable with it!

## Wins

- Getting the map to work with its search functionality. Reading through Mapbox's documentation and then implementing it was a huge win.

- The chance to work with other developers was really awesome and I loved every minute of it! The ability to bounce ideas off each other made this project really enjoyable to build.

## Future Enhancements

- I would definitely like to look at being able to calculate routes to each of the users searched locations on the map page.

- The ability to update account details, such as changing an email or updating a password.

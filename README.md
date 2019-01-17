# relEVENT :calendar: :guitar: :tada: :cake: :cocktail:

Built with React.js and Ruby on Rails, relEVENT is an event aggregator app that helps users find and discuss upcoming events in Toronto. Users can save a list of their favourite events and each event has its own real-time chatroom that multiple users can participate in.

### Getting Started

Install the dependencies, create and seed the database and start the front-end and back-end servers in two separate terminal windows.

--- initial set up ---

Clone this repo in your local.
This project consists of 2 folders, server and client.

get your own eventbrite API key if you don't have.(https://www.eventbrite.com/platform/api-keys/)
make an .env file inside of both "server" and "client" folder and set API key  
ex.TOKEN=YourAPIKey

In the server folder. Install gem files.
```
$bundle 
```

In the server folder.
To set postgreSQL database.

```
$ createdb api_development
$ bin/rake db:migrate
$ bin/rake db:seed or $bin/rake db:reset (refresh data)
```

In the client folder. Install npm.
```
$npm install
```
---------------------

In the server folder, from a terminal window, run server. this server will run at http://localhost:8080
```
$ rails s 
```
In the client folder, from a terminal window,
```
$ npm start
```
open http://localhost:3000 to see relEVENT page.


### Dependencies

- React
- Webpack
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

# relEVENT :calendar: :guitar: :tada: :cake: :cocktail:

Built with React.js and Ruby on Rails, relEVENT is an event aggregator app that helps users find and discuss upcoming events in Toronto. Users can save a list of their favourite events and each event has its own real-time chatroom that multiple users can participate in.

### What to expect

- The main page will preload 50 general events in the city of Toronto

- Visitor could see the brief info, date, location and the "POPULARITY", which is counted based on the times users have clicked "like", about an event

- Visitor can flip the event card to see the introducation, and click "more" to navigate the full page on Eventbrite

!["The main page"](./document/main-page.gif)

- The Search Bar on the top allows user to input one or multiple criteria(keyword, Start Date, Category, Location and Distance) to refine the result of event and fetch more events

!["The main page"](./document/searching.gif)

- Vistor could register/log in to explore the full functionalities of the relEVENT

- Log-in user could "like", "save" and "chat" about a selected event

!["The main page"](./document/login-and-chat.gif)

- Log-in user could chat in real-time, share photos/gifs and chekc the chatting history in the chatting save

- Log-in user could see his/her preference in the list of saved events and fast navigate to the saved event and its chatting space

!["The main page"](./document/savedlist.gif)

### Getting Started

---

![image of relEVENT](<https://github.com/ErikNPeterson/relEVENT/blob/master/images/relEVENT_top%20(1).png>)

---

## Check out the App ONLINE

- _NOTE: please give it a minute to load_
- https://relevent-client.herokuapp.com/

---

## Set up the App on your local drive

Through the following instructions you will `install dependencies`, `obtain API key`, `create and seed the database`, and `run the front-end and back-end servers`.

In the server folder. Install gem files.

```
$bundle
```

1. Clone this repo to your local drive.

2. Obtain an `eventbrite API key` @(https://www.eventbrite.com/platform/api-keys/)

3. Create an `.env` file inside of both `server` and `client` folder
   - set API key inside `.env` ex.`TOKEN=YourAPIKey`

<<<<<<< HEAD
In the client folder. Install npm.

```
$npm install
```

---

In the server folder, from a terminal window, run server. This server will run at http://localhost:8080

```
$ rails s
```

In the client folder, from a terminal window, run client's server. The client server will run at http://localhost:3000

```
$ npm start
```

# open http://localhost:3000 to see relEVENT page.

4. In the `server` folder, run the `bundle install` command to install `gem` files.

5. In the `server` folder, run the following commands set up the database.

   1. `createdb api_development`
   2. `bin/rake db:migrate`
   3. `bin/rake db:seed` to seed or `bin/rake db:reset` to reset the database.

6. In the `client` folder run the `npm install` command.

7. In the server folder run the `rails s` command. This will run the server at `http://localhost:8080`

8. In the client folder run the `npm start` command. This will run the application at `http://localhost:3000`

9. Open a web browser and go to `http://localhost:3000` to see relEVENT page.

10. Enjoy relEVENT!

---

> > > > > > > 10a30db89e02814ca60e7fda3576d467ba285b6c

### Dependencies

- React
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- action-cable-react
- fscookie
- sass
- rails
- bcrypt

### Authors

- **Azusa** [azusaaz](https://github.com/azusaaz)
- **Erik Perterson** [ErikNPeterson](https://github.com/ErikNPeterson)
- **Eric Zhao** [froliceric0914](https://github.com/froliceric0914)
- **Ryan Kendrick** [RyanKendrick](https://github.com/RyanKendrick)

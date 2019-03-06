# relEVENT :calendar: :guitar: :tada: :cake: :cocktail:

Built with React.js and Ruby on Rails, relEVENT is an event aggregator app that helps users find and discuss upcoming events in Toronto. Users can save a list of their favourite events and each event has its own real-time chatroom that multiple users can participate in.

## Check out the App ONLINE
- *NOTE: please give it a minute to load*
- https://relevent-client.herokuapp.com/

## Set up the App on your local drive

Through the following instructions you will `install dependencies`, `obtain API key`, `create and seed the database`, and `run the front-end and back-end servers`.

1. Clone this repo to your local drive.

2. Obtain an `eventbrite API key` @(https://www.eventbrite.com/platform/api-keys/)

3. Create an `.env` file inside of both `server` and `client` folder
   - set API key inside `.env` ex.`TOKEN=YourAPIKey`

4. In the `server` folder run the `bundle install` command to install `gem` files.

5. In the `server` folder set up the *postgreSQL* database by running the following commands.

```
$ createdb api_development
$ bin/rake db:migrate
$ bin/rake db:seed or $bin/rake db:reset (refresh data)
```

6. In the `client` folder run the `npm install` command.

7. In the server folder run the `rails s` command. This will run the server at `http://localhost:8080`

8. In the client folder run the `npm start` command. This will run the application at `http://localhost:3000`

9. Open a web browser and go to `http://localhost:3000` to see relEVENT page.

10. Enjoy relEVENT! 

---------------------

### Dependencies

- React
- Webpack
- [babel-loader](https://github.com/babel/babel-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

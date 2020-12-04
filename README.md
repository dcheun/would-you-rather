# Would You Rather - A Choose Between Two Choices Game

would-you-rather is a web app that lets a user play the "Would You Rather?" game.

A user is asked a question in the form: "Would you rather [option A] or [option B]?" Answering "neither" or "both" is against the rules.

## Features

The interface includes the following screens and features:

- The main screen is a dashboard where the user can alternate between viewing answered and unanswered polls.
- New Question allows the user to create a new poll.
- Leader Board displays a list of users with their statistics and overall score. Users are ordered based on their score, the highest at the top.
- Clicking on a poll will allow the user to either place a vote or view the results depending on whether or not the user has answered the question.
- Sign In allows a user to login/impersonate three users populated on the backend.

The app uses react-router-dom to create URL routes that allow browser back/forward functionality.

## Usage

Before viewing any pages, the app requires the user to sign in and redirects them to sign in.

After signing in, user is then redirected to the home page. An exception is if the user tries to type in the route to a specific question (/question/:id). In this case, after signing in, the user is displayed with the question information page or 404 if that poll was not found.

Navigation to different pages are provided on the nav bar. At the home page, simply click on "View Poll" on any question listed to vote or view its results.

### Install Dependencies

```
npm install
```

### Run

This project was created with create-react-app, which uses webpack under the hood. Therefore, running "npm start" should automatically launch the application on a new browswer window with webpack dev server.

```
npm start
```

To build for production:

```
npm run build
```

## Project Details

The project uses a backend DATA file with an API interface provided by Udacity's React course. Due to the way the backend is set up, changes are not persisted on browser refresh.

The tech stack used to build this project includes:

- react, redux, react-redux, redux-thunk, react-router-dom

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

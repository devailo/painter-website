# Painter Website React.js Project

## About
The project was at first supposed to be a personal website for a individual painter, but as more features and more accounts were needed for the sake of the project, the website became a hybrid - Portfolio/marketplace/social network. My idea is after the course ends, i am going to split the project in two different websites. One will be the personal portfolio painters site and the other will be the marketplace/social network. 

The web Page is also deployed with firebase for the react part and with render.com for the server. It is live and working: [Here](https://painter-website.web.app/)

![Project Dashboard](https://i.imgur.com/gdF4J2d.png)

## Public part

This part of the platform is designed for non-registered users. These users have access to the following:

* Home page -> 
Main dashboard page in which the user is welcomed and can see the last 3 uploaded artowrks. 
* Gallery -> 
The place where the user can see all uploaded artworks.
* Artwork Details Page -> 
A page offering more detailed information about the painting such as: larger image, title, description, painter, price, category and all the comments posted by the registered users.
* Login-> 
A page where the login form for already registered users is located.
* Register-> 
A page where the register form is located.

## Private part

* Profile -> 
The page where a painter can view his user information as well as all the artowrks they've uploaded. 
* Upload Art -> 
A page with a form for uploading artworks.
* Details/Edit -> 
A page with a form for modification of a selected artworks, if the user is the owner.
* Details/Delete -> 
A page with a confirmation prompt for deleting owned artworks.
* Details/Comments -> 
Guests and users are able to read the comments in the artwork details pages. 
Logged in users can comment on all the artworks.

## About The Project - Technical Description

### Built With

* [HTML + CSS designed by Ivaylo Stoyanov](https://github.com/devailo)
* [React.js](https://reactjs.org/)
* [SoftUni practice server](https://github.com/softuni-practice-server/softuni-practice-server.git)

### To start the practice server:

When you are in the project directory:

Open a command prop window and navigate to the server directory with command  `cd server`.

While you are located in the server directory. To execute the server run the following command:  `node server.js`.

### Authentication

The server is initialized with three users, which can be used for immediate testing:
* peter@abv.bg : 123456
* john@abv.bg : 123456
* davinci@abv.bg : 123456

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

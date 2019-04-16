Please note: App/Server might be asleep from 12:00 a.m. to 6:00 a.m. GMT

Ouch, My Everything is an online pain journal that allows you to record your pain with just 2-3 clicks of a button (after login!). You can record pains based on location (over 70 locations total) and severity (1-5, 5 being the strongest). Viewing options are front only and back only while data filtering can be done based on date (all pains within 7 days, all pains within 14 days, 1 month, 3 months, 6 months, and 1 year). The app prefills locations' colors based on two attributes: the average pain intensity (red: heavy pain, green: medium pain, and blue: light pain) while the shade gives the user a general idea of how many days out of the current display view they've had that pain (the more opaque the color, the more days the user has had pain in that location).

The goal of the app is to allow users to easily keep track of pain and provide a quick snapshot view of where, how badly, and how long they have hurt over the past X days/months/year.

As of April 16, 2019, the app is currently being hosted here: 
https://jovial-allen-c95d7e.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/0fc64707-386d-4c04-b683-b1db2ad45145/deploy-status)](https://app.netlify.com/sites/jovial-allen-c95d7e/deploys)

Image of the landing page:
![Image of Landing Page](https://github.com/thinkful-ei27/nick-react-capstone/blob/master/ReadMeLandingPage.png?raw=true)

Image of the login page:
![Image of the login page](https://github.com/thinkful-ei27/nick-react-capstone/blob/master/ReadMeLoginPage.png?raw=true)
      
Image of the UserHome Page (this is where the "magic" happens):
![Image of the UserHome Page](https://github.com/thinkful-ei27/nick-react-capstone/blob/master/ReadMeLandingPage.png?raw=true)

TechStack for FrontEnd: HTML, CSS, JavaScript, ReactJS, Redux, Moment*, and React-Image-Mapper**.
TechStack for the BackEnd: Node.js, Mongoose, and MongoDB (noSQL).

*Moment can be found here: https://www.npmjs.com/package/moment
**React-Image-Mapper can be found here: https://www.npmjs.com/package/react-image-mapper

The database lives over at MLab (https://mlab.com/welcome/)
The server that handles client requests (user creation, login, pain data submission, and pain data requests) lives on Heroku.
The client-app that handles the front-end (once it receives the data, it also handles the interpretation of said data) lives on Heroku (https://www.heroku.com/).

If you would like to use this app or are just curious about it, feel free to contact me at FrankyMcJay@gmail.com.
If you want to mess around with a user that has fake data added, please feel free to use username: Test1 password: password123
If you're unsure of how the app works, there is a tutorial past the landing page. 












BELOW IS REACT'S GENERIC README FOR REACT PROJECTS


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

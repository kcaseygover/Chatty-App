Chatty-App

A simple single page chat app using React Boilerplate and WebSockets.

### Usage

Clone the repo and install dependencies.

```
git clone git@github.com:kcaseygover/Chatty-App.git
cd Chatty-App
npm install
npm start
open http://localhost:3000
```

In another terminal tab, install the WebSockets dependencies and start the server.

```
cd chatty_server
npm install
npm start
```

Start chatting on http://localhost:3000


React Boilerplate
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]
# Manually update your package.json file
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

#  Police Neighbourhood Explorer

**Police Neighbourhood Explorer** is a simple application(based on **[UK Police Data](https://data.police.uk/)**) that allows users to explore events for an individual neighbourhood. 

A user is able to navigate a list of police forces and neighbourhoods to identify a particular neighbourhood to view details of upcoming events in that neighbourhood.

## Features
Police Neighbourhood Explorer allows users to:
* Navigate a list of police forces and neighbourhood.
* View upcoming events in the searched neighbourhood.
* Filter events based on based on date.
* Filter events based on type of events.

## Dependancies
The application uses [Node Package Manager(NPM)](https://www.npmjs.com/) to install multiples packages.

Make sure you have the latest version ( > 6.10 ) of [Node](https://nodejs.org/) installed before starting the installation process.

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use the [NPM](https://www.npmjs.com/) to start the installation of all the dependancies by using the following command:

```bash
npm install
```
Once the dependancies finish installing you can start the application by running
```bash
npm start
```
This runs the application in development mode.


Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits and you will also see any lint errors in the console.

## Deploying
The application is hosted on [GitHub Pages](https://pages.github.com/) and uses the [gh-pages](https://github.com/tschaub/gh-pages) package to publish the application.

To deploy the application on a production server run the following in the root folder of your application
```bash
npm build
```
This builds the application for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Source Code
The source code for the application can be found on [GitHub](https://github.com/abhishekm86/police-neigbourhood-explorer).

## API Endpoints:
The application uses [Police Data API](https://data.police.uk/) to retrieve data for users to choose from. 

The following three endpoints are utilised:
* [List of forces](https://data.police.uk/docs/method/forces/)
* [List of neighbourhoods for a force](https://data.police.uk/docs/method/neighbourhoods/)
* [Neighbourhood Events](https://data.police.uk/docs/method/neighbourhood-events/)

## Packages used
* [ReactJS](https://reactjs.org/)
* [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
* [MomentJS](https://momentjs.com/)


## Supported Browsers
| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /></br>iOS Safari |
| --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions 



## License
MIT License, see the included [License.md](https://github.com/abhishekm86/police-neigbourhood-explorer/blob/master/License.md) file.
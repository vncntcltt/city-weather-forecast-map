This project is a frontend technical test for a job application.

The objective is to display some cities on a map and the weather forecast for theses cities using data from the OpenWeather API.

![ScreenShot](/screenshots/main.png)

## Notes

I opted to display the temperature and humidity on a chart using the HighCharts library.
I implemented the map using OpenLayers (instead of the more common Leaflet) to improve my knowledge of this library.

For security reasons, **the OpenWeather API key is not commited**: you have to put your own in the *.env* file by setting the *REACT_APP_API_KEY* environment variable.

You can also change the number of days for the weather forecast by setting the *REACT_APP_API_KEY* variable (default is 3 days).

## Running the app

Set your OpenWeather API key with the *REACT_APP_API_KEY* variable in the *.env* file.
Using Docker: `docker-compose up`
The app should be available on http://localhost:3003

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

Install node >= 12 and yarn (or npm)

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

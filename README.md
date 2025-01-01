# Weather App

## Overview
This is a simple weather app that allows users to get the current weather details for any city worldwide. The app fetches data from the AccuWeather API, and displays the temperature, weather status, and a weather icon. It features multiple pages (Home, Weather, About) and uses Handlebars (`hbs`) templates for rendering views and partials.

## Features
- **Home Page**: A welcome page with navigation to the Weather and About pages.
- **Weather Page**: Users can enter a city name to fetch the current weather.
- **About Page**: Information about the app and its functionality.
- **Responsive Navigation Bar**: A navbar that links to the Home, Weather, and About pages.

## Prerequisites
Before you can run the app, ensure that you have the following installed:
- Node.js (v16.0.0 or later)
- npm (v7.0.0 or later)

## Setup Instructions

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Harmandeep01/AccuWeather-Weather-APP.git
    ```

2. **Install dependencies:**

    Run the following command to install the necessary packages:

    ```bash
    npm install
    ```

3. **Set up your API key:**

    You need an API key from AccuWeather to fetch weather data. To get the key:
    - Go to [AccuWeather API](https://developer.accuweather.com/).
    - Sign up and get your free API key.

    Once you have your API key, replace the placeholder `your-API-Key` in the script tag of `weather.hbs`:

    ```js
    const apiKey = `your-API-Key`;
    ```

4. **Start the server:**

    To run the app, use the following command:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

5. **Open the app:**

    Visit the app in your browser by navigating to:

    ```
    http://localhost:3000
    ```

## File Structure

```plaintext
weather-app/
│
├── views/
│   ├── index.hbs
│   ├── weather.hbs
│   └── about.hbs
│
├── partials/
│   ├── headerLinks.hbs
|   ├── navbar.hbs
│   └── footer.hbs
│
├── public/
│   └── styles.css
│
├── app.js
└── package.json
```

## Views

- home.hbs: Displays the home page with a welcome message and navigation.

- weather.hbs: Displays the weather form where users can search for a city and see the current weather.

- about.hbs: Displays information about the app.

## Partials
- headerLinks.hbs: Contains the navigation bar used across the app.

- navbar.hbs : Contains all the important navigation links.

- footer.hbs: Contains the footer used across the app.

## Technologies Used
- Node.js: Backend runtime environment.
- Express.js: Web framework for building the server.
- Handlebars (hbs): Templating engine used to render views and  partials.
- Bootstrap 5: Frontend framework for responsive design.
- AccuWeather API: Provides weather data for cities worldwide.

# Credits
This weather app uses the **AccuWeather** *API* to fetch weather data. Special thanks to AccuWeather for providing the API.
- AccuWeather API

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Feel free to fork the repository and submit pull requests if you'd like to contribute improvements or new features!

## Contact
For any inquiries, feel free to reach out

[LinkedIn](https://www.linkedin.com/in/harmandeep01/)

[GitHub](https://github.com/Harmandeep01)

[GMail](sharmandeep954@gmail.com)


    In this README, the Credits section explicitly acknowledges AccuWeather for providing the API used in the weather app.

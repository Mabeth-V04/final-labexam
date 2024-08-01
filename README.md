# final-labexam

# WEATHER APP
This Weather App allows users to search for weather information by city. It fetches data from the OpenWeatherMap API and displays the current weather conditions.

# SETTING UP AND RUN THE APPLICATION
Before you can run the Weather App, you need to have the following software installed:
- Node.js
- npm or yarn 

- Clone the Repository
- Install Dependencies

# OBTAIN API KEY

To fetch weather data, you need an API key from OpenWeatherMap.

Go to the OpenWeatherMap website and create a free account if you don’t already have one.

Once logged in, navigate to the API Keys section in your account dashboard.

Generate a new API key and copy it.

Open the src/App.js file and replace the placeholder API key with your newly generated key:

# ASSUMPTIONS
The API key is valid and has not expired.
The city name entered is valid and recognized by the OpenWeatherMap API.
The user has a stable internet connection to fetch weather data.

# LIMITATIONS
City Name Validation: The app does not validate city names beyond checking if they exist in the API’s response. Incorrect or misspelled city names may return no data.
Error Handling: The app does not currently handle specific API errors (e.g., rate limits, invalid API keys) beyond a generic error message.

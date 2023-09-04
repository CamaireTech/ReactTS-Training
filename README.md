# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you must first run the following in order:

### - `npm install`

### - `json-server --watch src/database/db.json --port 3031`
### - `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) (May differ if port 3000 is already busy) to view it in the browser.




### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# How to use the Website

After succesful launch on port, You are provided with a list of already inserted missions which are in the database. In this same page you are provided with a button to add a mission in which you would need to provide information such as mission :
- name, 
- mission description, 
- Mission members (at least one member is required)
- Mission launch date

Only upon addition of the missions would the `add mission` button be enabled for you to click to save the mission

In this list of missions you can only see the name of a mission but not the mission details. It's only upon clicking(selecting) a mission you would be able to see it's details such as launcDate, members and description.

A search bar is provided for the user to be able to search for missions based on name and description. THis involves entering a list of sequential characters that can be found in the name or description of the mission.

For example, a mission may have as title "Go to the grocery store and buy food for the dogs"
Upon typing "dog" or "grocery" or "store", etc, This mission and any other related mission having the search string in the mission title or description would be returned to the user as result.

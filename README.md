# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you must first run the following in order:

### - `npm install`

This is to install all required dependencies for proper running and functioning of website.

Npm may warn you about versioning issues but for the momment this can be ignored.

### - `npm install -g json-server`

This is also required to be able to save data(different mission) using axios to local json file since no storage such as MySql , MongoDb , etc is being used

### - `json-server --watch db.json --port 3031`
! Open a new teminal before typing in this command as you would be unable to use this terminal unless you terminate the process using `Ctrl + c`

Command for launching local server and enabling saving og user missions for future referencing.
LocalStorage could also be used but once the user closes the browser, clear his/her cookies, clear browser cache all the data (missions) would be lost

### - `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) (May differ if port 3000 is already busy) to view it in the browser.

At this point , if all was succesful , your app should be up and running !



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

# Code Structure

The main working aspects of the website is in the ` build ` folder.
In this folder, a number of subfolders would be found sucn as
- Components    
    Where the reusable components of the application would be kept. They can be used independent of their parent component, provided required props are give. EG Buttons
- Context   
    Where Information which to be shared within numerous components should be kept. In this website sice the search bar, Missions and modal components are to use the missions list, a Mission context was created
- Middleware    
    middleware refers to software components or functions that sit between the application and the operating system or database, providing a communication and processing layer. It acts as a bridge between different components of an application, allowing them to interact and exchange data.

    A middleware has been created here `ApiMiddleware` which would contain the functions that would run when any interaction with the database wants to be carried out
- Models        
    Where the required classes from which to instanciate Objects from would be created. Here we have the Mission model
- Styles     
     All css related file are kept here. For this website, sass has been used, reason for .scss files
- types
    Where TypeScript Interface definition files would be kept for easy rechabilitu
- Utils     
    Utilities to be used within the application are kept here.

- Views
    THis is where the rendered pages of the application would be kept for easy referencing. Each page is supposed to be kept within its own folder. Since we just have a single page for this website, only `Home` would be in the views folder

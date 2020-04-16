# GAME ON! [FE Repo]
an iOS app connecting active people with exciting, recreational activities in their community!

![logo](https://user-images.githubusercontent.com/53405028/79399821-97868a00-7f41-11ea-9f51-c88389a9d84d.png)

### Introduction
Hey all you cool cats and kittens, welcome to Game On! Denver's hottest new platform connecting active people with games and outdoor activities. Users can create, join, and delete events on the event board in real time. Still sitting on the couch? Get up and join your neighbors for an exciting game of spike ball at City Park or a hike at Red Rocks!

### Description
This was our final "cross-pollination" project at Turing School of Software and Design. Our team of two front end students and two back end students were tasked with developing a complete app from scratch using new technologies. The app allows a user to log in (project is currently a prototype with one universal user) and view a map with pins representing local events near them. The user can search events by date or activity type. A user can also create activities to post to the "activity board" choosing from a list of set activities or creating their own custom activity. The user can choose to "sign up" for an activity or decide to "cancel" if they are unable to attend.

### Screenshots
![screenshot 1](https://user-images.githubusercontent.com/53405028/79489849-2db9bf00-7fd9-11ea-9bdd-5fa4f7cdf41a.png)

### Directions for Use
- When loading the app the user is greeted with a login screen asking for username and password. Currently, the app is a prototype and doesn't require a login, you may simply press the `sign in` button.
- You are now viewing the user dashboard. Here, you will see a button on the top left labeled `CHANGE DATE`. Selecting this button will take you to a date picker screen where you can select a date from the roller modal and press the `SELECT DATE` button to view events for that specific day on your dashboard.
- Back on the dashboard in the top right corner is a `CREATE EVENT` button. Selecting this button will direct the user to a form for creating a new event. Be sure to fill out all necessary fields before selecting the `CREATE EVENT` button on the bottom of this screen.
- On the "CREATE EVENT" form a user can choose from any pre-built activity in the "Activity:" drop down menu. If you wish to create a custom activity, select "Custom" from this drop down menu and use the "Notes" field on the bottom of the form to title your activity (the app also prompts the user to do this).
- The user dashboard also features an integrated Google Map. This map displays pins representing all the activities available for the current selected day. A user can press on one of the pins to be redirected to a page showing the complete information for that activity (Alternatively, a user can also be directed here from pressing on the event cards from the dashboard).
- When viewing the full information of an event card, the user will also notice a `COUNT ME IN!` button. Pressing this button will "sign up" the user for the event (notice the number of attending participants increases by one).
- If a user decides they are unable to attend the event, they can open up the full event info card and now select the `CANT MAKE IT` button (notice the number of attending participants decreases by one).
- The dashboard also features a `FILTER ACTIVITY` button. Selecting this button will display a drop down menu where a user can select one specific activity to filter the events displayed on the dashboard to only include that specific activity.
- This concludes the basic functionality for the app. As this project is just a prototype at this time, we encourage feedback from our community. Feel free to message any of the GitHub accounts below with feedback or questions!

### Project Learning Goals and Requirements by Turing
This is a unique opportunity that presents some valuable goals:
- Ultimately, demonstrate knowledge you’ve gained throughout Turing
- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow (see whole-team expectations)
- Gain more experience using continuous integration tools to build and automate the deployment of features in various environments
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec

### Front-End Technologies Used
- React Native
- React Navigator
- React Redux
- TravisCI
- XCode iPhone Simulator
- Expo
- Jest
- Enzyme
- React Native Modal Dropdown
- React Native DateTimePicker
- NPM

### How to run simulator on a Mac using NPM
1. You will need XCode iPhone simulator. If you don't have it, you can download it from [here](https://apps.apple.com/us/app/xcode/id497799835?mt=12). Now install XCode on your machine.
2. Clone down this repo into a local directory.
3. `cd` into the project directory and run `npm install`.
4. Start up XCode iPhone simulator.
5. Back in your terminal (within the project directory) run `npm start`. If you do not currently have Expo installed, you will be prompted to install it. Now, you should be automatically redirected to your browser where a new Expo tab will open.
6. Navigate back to your terminal and press `i` to run the project in your simulator. Alternatively, you can select the `Run on iOS Simulator` button in left column of the Expo tab in your browser.
7. The app should now be running and you can interact with the GAME ON! prototype!
8. If you run into problems, try following along with the directions for setup in this [video](https://www.youtube.com/watch?v=qSRrxpdMpVc&t=3495s). Start video at 00:47:00 for setup tutorial.

### Future Iterations/Bug Fixes
- Add ability to create new users and save their information on the database
- Refactor project to utilize the built-in iPhone keyboard
- Disable the ability for a user to create an event in the past
- Display only events for a particular day that have not yet started
- Ability to modify an existing event
- Ability to let other users know you can provide specific equipment

### Front End Project Creators:
Zachary Nemeroff https://github.com/ZaneMeroff<br>
Ryan Novak https://github.com/ryan-novak

### Back End Project Creators:
Phil DeLong https://github.com/philjdelong<br>
Jordan Holtkamp https://github.com/jordanholtkamp

### Link to Back End Repo:
https://github.com/Mod-4-Cross-Pol/BE-game-on

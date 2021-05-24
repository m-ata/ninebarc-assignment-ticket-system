# About Ticket System
User is supposed enter into the application where some of the questions is being asked from the user and according to answers and selection of ticket from user-side, the final ticket will be generated.

# How to run the project ?
  - Clone the project
  - run npm install
  - run npm start (it will automatically open the application on http://localhost:3000/)
 
# Frameworks & Technology Stack Used
  - React
  - Typescript
  - Webpack
  - Webpack Cli
  - Webpack dev server
  - Material UI
  - @date-io

# Application Flow
  These are the following steps user have to procees:
  - User Enter his/her name
  - User will select type of ticket with single or multiple time (in case of multi ticket user can enter maximum 7 days).
  - User will select Source and Destination location.
  - User will select Date & Time with duration type either Departure or Arrival.
  - Based on the following answers, there are multiple tickets will be generated and user is supposed to select one of the in order to proceed.
  - At the end user will get the ticket from popup and application state will reset.

# Methodology and Constraints
  - All the user input data is saved in **Context** in order to prevent component level dependencies. The reason to choose **Context** over **Redux** is due scalibility of the project since this application only consist of one single page and we always prefer to use Redux in large scale of application.
  - We have constraint on ticket usage in the second step. In case of multiple time usage ticket, user can use ticket of maximum 7 days.
  - I have choosed some static stations of Berlin for just testing purpose.
  - Since we have the option for the user to select tickets. So based on previous question, I did some random calculation in order to generate multiple tickets because we don't have any data from server.
  - There are some helper functions in order to generalize code.
  - Application is based on webpack server instead of CRA.

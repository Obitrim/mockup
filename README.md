# Mockup test

## Assumptions

- You have git cli installed
- You have yarn package manager installed

Setup

- Clone repository: `git clone https://github.com/Obitrim/mockup.git`
- Navigate into project directory
- Run `yarn` in your command line to install packages
- Run `yarn dev` to start up project
- Access project on `http://localhost:5173/` provided port 5173 is default. If not, use port number provided when `yarn dev` was run

### Improvements that could have been done

- Handle error state (when an error occurs during data fetching)
- Split api requests into separate files for modularity
- Put API url into .env file for security reasons
- Break components into smaller components and configure to receive appropriate props
- sidebar animates in when toggle button is clicked with an overlay over the remaining parts of the screen
- leftmost table column sticks to the left when scrolling horizontally and table header sticks to the top when scrolling vertically
- configure vue router to display different pages on different routes
- configure a global store to store state that can be used across components
- implement table filter

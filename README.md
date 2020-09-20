# Halfway Assessment Part 2

This is part 2 of our halfway assessmsent; a pull request must be made before 6pm today to submit this assessment.
You will be making a generic note-taking app. If you are finished early try to add more features and make this app even more impressive!

![noteapp](./docs/images/noteapp-example.png)

## Rules

1.  **You are allowed to use Google.** But:
    - Stay within reason
    - You are not allowed to copy/paste code
1.  **You are NOT allowed to look at or use any previously written code (whether by you or someone else).**
    - **Copy/Pasting previous code and simply renaming some variables is still considered cheating and will have serious consequences.**
    - **Likewise, answering questions by copy/pasting text from official resources is considered cheating**
      - Use your own words and thoughts to answer questions.
1.  Remember to give yourself a score for each part of this assessment.
1.  Tests are **optional**, but highly encouraged.

## Pull Requests

When making a pull request, follow the questions in `pull_request_template.md`

In your pull request details, please add in the URL to your deployed app.

## Set Up

Install dependencies: `yarn`

Start your server: `yarn start`

Start the frontend development server: `yarn dev`

## Requirements

Read through and understand the instructions before starting work. **If anything is unclear, flag down an instructor immediately.**

You will be making a full-stack web app that is deployed via Heroku. Your stack will include: Postgres, Knex, React, Redux, Node/Express, and Heroku.

**Sprinkled throughout the provided codebase are questions as well, so remember to answer all of them!**

You will be making a full-stack note-taking app that looks like the below:

![full-app](./docs/images/full-app.png)

### Front-End

Your front-end does not need to look exactly like the above, but you should make a good effort.

Before you start, you should know that:

- All of your front-end code should be placed in the `src` folder
- Not all your dependencies are listed in your `package.json`

#### Front-End Basic User Requirements

Below are expected user behavior. You may not get time to implement everything to the last detail, but we want to see the basic actions: Create, Read, Update, and Delete.

- READ: Users should be able to see a list of Note Cards on the left-hand side and a single input text box on the right (the Notetaking Space) with the text of the currently chosen Note.
  - The list of Note Cards should be sorted based on time (see wireframe).
  - Each Note Card should have the title of the Note that it is representing and when it was last updated ![note-card](./docs/images/note-card.png)
  - The title of the Note should come from the first line of the Notetaking Space. If the first line is too long, only take the first few characters that will fit into the title of the Note Card (see wireframe).
  - Clicking on a Note Card should render the text of the chosen Note in the Notetaking Space and the chosen Note Card should also be highlighted (see wireframe)
    ![add and delete](./docs/images/add-and-delete.png)
- CREATE: Users should be able to click on an "Add" button that should create a blank Note Card on the left and a blank Notetaking Space on the right.
  - As the first line in the Notetaking Space is written, the corresponding Note Card on the left should update. ![new card](./docs/images/new-card.png)
- DELETE: Users should be able to click on a "Delete" button above the Notetaking Space
  - Clicking the Delete button should remove the note from the list.
  - The current view of the Notetaking Space should default to the next available Note
- UPDATE: Users should be able to write in the Notetaking Space.
  - When a User updates the first line of a Note in the Notetaking Space, the title of the Note Card on the left should also be updated.
  - The Note should auto-save--a "Saved" text should appear above the Notetaking Space every five seconds after there is no keyboard movement OR when switching to another Note
    - Hint: How do you auto-save? Check out "keyup", "clearTimeout", and "setTimeout."
      ![saved](./docs/images/full-app-saved.png)

#### Front-End Advanced Requirements

- Create a search bar that will show the results of the search on the left hand side as a list of Note Cards

### Server-side

#### Server-side Basic Requirements

- Some server code is provided for you. Fill in the rest. There is also a question in `server/server.js` that you will need to answer.
- You should have endpoints for all of the CRUD operations specified, following RESTful patterns:
  - Create a note
  - List all notes
  - Read one note
  - Update a note
  - Delete a note
- You should separate the logic of controllers and models. Make sure controllers are easy to be tested.
- Your server should also run the migrations and seed the databases. Put that information in the `server/index.js` file, right before your server starts listening. You should check out the `knex` documentation to see the APIs for running it. Remember that seeding and migrations are asynchronous actions.

#### Server-side Advanced Requirements

- Add in a search endpoint

### Database

#### Database Basic Requirements

1.  In your `models/index.js`, we have provided a simple knex object, configured with the correct connection information.
1.  There is also a file called `models/knexfile.js` that might be useful. It is not filled out though, so you will need to add information about the connection, otherwise, your migrations won't work.
1.  Create seed files for your database. We've included a simple JSON file to help you get started in `data/notes.json`.
1.  Create migrations for your database.
1.  Connect it with your endpoints!
1.  Put a 'migrate' script in your `package.json`

#### Database Advanced Requirements

- Add in search capabilities in your database!

### Questions

Remember to answer the questions in the files!

You can find questions in:

- `models/knexfile.js`
- `server/server.js`

### Deployment

#### Deployment Basic Requirements

1.  Deploy your app using Heroku. You do NOT need to set up a pipeline.
1.  Hint: Do not forget to add Postgres to your Heroku as an add-on!
1.  **Please provide a link to your deployed app in your pull request.**

## What We Are NOT Testing For

- GraphQL

## What We Look For

The most important thing that we will be looking for is: **DOES IT HAVE THE FULL-STACK FUNCTIONALITY WE WANT?** In other words, we want you to be able to come up with an MVP. Remember to spend your time wisely.

It is okay to add more packages / re-do the boilerplate from the ground up as long as the full stack functionality is met.

Your understanding of the material will be rated through:

- if your code works
- the quality of your code
- code style and organization
- the quality of your commits

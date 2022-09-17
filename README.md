# GistAPI
## Project setup
The project was done using React and it's run with the following command `npm start`.
## Features
The interface offers the user the possiblility to query the Github Gist API for a user's gists (using a "search as you type" functionality). The list of Gists will be displayed under the input with their corresponding ID's, description, programming languages used and forks (if applicable).

By clicking a Gist the user will be redirected to the "raw_url" of the first file in the Gist.
## Possbile improvements
- State management using React Context/Redux (not really necessary on a project with this complexity)
- Improving overall styling (colors, shadows etc)
- Tweaking the throttle function used to query the API
- Offer the possiblity to access any file content of a Gist (currently we always redirect to the content of the first file)

## Mentions
For querying the API I've used a personal access token from Github to avoid rate limiting, the token contained in the project was revoked prior to uploading the project to Github.

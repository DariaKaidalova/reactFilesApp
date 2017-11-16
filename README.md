# Egnyte recruitment task for a front-end developer


## Run the project in a browser
```
npm install
npm test
npm start
```
Navigate to http://localhost:8080


## Task 1
### As a user I want to be able to delete a file and folder
#### Acceptance criteria
* Delete button is visible next to each item on the list
* Clicking on the button removes item on backend
(See readme.md in server directory for API documentation)
* Delete button is replaced with waiting indicator until server responds
* On success response from server item is removed from the list
* On failure an error message is shown


Cover created functionality with unit tests where reasonable

## Task 2
### As a user I want to be able to rename a file and folder
#### Acceptance criteria
* Rename button is visible next to each item
* Clicking on the rename button remplaces file/folder name with input prefilled with it’s name
* Save button is visible next to the text input
* Clicking on the save button replaces item name on backend
(See readme.md in server directory for API documentation)
* Save button is replaced with “Loading…” text until server responds
* On success response from server text input is replaced with updated name and “Loading…” text is removed
* On failure text input is replaced with old name.
* “Loading…” text is removed.
* Error message “{File/Folder} {OldName} rename failed.“ is shown on the top of the page
* Error message is dismissable (close button or timeout)

## Task 3
### As a user I want to be able to search for files and folders

Add search field to the UI that will cause showing a list of files matching provided string.
#### Acceptance criteria
* Input field is visible above the list of items
* On input change request is sent to /search endpoint
* Results from search endpoint are shown instead of current list
* Title above the list is replaced with: “Search results:”
* If no results are found message: “No results for {phrase} found.”
* When search field is empty, view for last visible directory is restored
* Clicking on a folder in result list navigates to that folder and search list is cleared
* Search request to API is debounced by 200ms

Note: Please consider reusing/extending some parts of code that already exists.

## Bonus: Bulk delete
### Add ability to select multiple items on the list and remove them at once.
#### Acceptance criteria
* any that meets the goal ;)


# Egnyte recruitment task for a Node.js developer

## Task 1
Add an endpoint to upload a file to a folder by ID - store uploaded content in a local file just to show how you handle the stream. Choose a url for this endpoint that would be intuitive to the front-end.
 - Bonus point for accepting multipart/formdata upload, but that's not mandatory.
 - You can just save the whole POST body to a file.

## Task 2
Add an endpoint to upload a file to a folder by path on top of what you already have.
 - Do not require %encoding of slashes in path
 - Paths of variable length must work

## Task 3
Add pagination to search with limit and offset query params

## Task 4
Rewrite fsLogic to use ./data/mockfs_async and use promises for everything.
 - Note you have access to bluebird promises with extra methods like map.
 - mockfs_async has a method called getData which you need to call every time you want to get the data and saveData which makes the updates. Assume it's your database and content can change from the outside.

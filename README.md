PERN Stack Application

I decided to do a todo list application using Postgres beacuse I feel like I understood Postgres better than MongoDB. I thought a todo list makes sense to build when I want to be able to use each of the CRUD methods. I decided to make multiple pages for the react app so it didn't look so one dementional, but the actual PERN app is in the Todo page. 
Since I used PostgreSQL I used pooling because its the easiest way to use node-postgres it does the handshaking to connect to the database. In the react app, I used useState with variables 'description' and 'setDescription' to post, read, update, and delete. When posting, the useState is an empty string because we're making a new description. When reading, we pass an empty array because we're trying to view all the descriptions in the todo table. When updating and deleting, we pass the todo.description to grab the description that we want to change or remove. I also used useEffect which is used to fetch data from the API when the component renders. The first arugment in the useEffect function is my getTodos function, which fetches the todos and the second argument is an empty array so that it only runs once when the component renders.
I think the hardest part was trying to integrate the database with the react app because we were never taught how to do that. I wanted to make a Call of Duty loadout database also, but that will have to wait because I didn't want to cause any issues with the work I've already done by getting the server codes mixed up.

Directions:
All you have to do is enter a todo item in the input box and click "Add" afterwards and it will display on the page as it does an autorefresh. The new todo item will also appear in the Postgres database I made for this project.
To delete the todo item, simply click the "Delete" button and it will remove from the page and the database.
To edit a todo item, click the "Edit" button. A modal will appear with the todo item you selected to edit in the input. Change the input text to desired text and click "Edit" to submit the update. The update will be reflected on the page and in the database.

Client code: https://github.com/rearl89/ms2-client

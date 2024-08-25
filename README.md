# wrike-basic-api-integration

This project demonstrates how to integrate with the Wrike API using Node.js. It fetches tasks from Wrike, maps them into a specified format, and saves them as a JSON file named tasks.json.

Before you begin, ensure you have met the following requirements:

You have installed Node.js (version 14 or higher).
You have a Wrike account and access to the Wrike API.
You have created a permanent access token for the Wrike API. You can generate this token by creating an API app in Wrike.
Installation

you must have node-fetch in your dependencies

Before running the script, you need to configure it with your Wrike API access token:

Open the index.js file in your preferred text editor.

Insert Your Access Token:

const token = 'YOUR_ACCESS_TOKEN_HERE';
Replace 'YOUR_ACCESS_TOKEN_HERE' with your actual Wrike API permanent access token:

Once you've configured the access token, you can run the script to fetch tasks from Wrike and save them in a JSON file.

Run the Script:

In your terminal, execute the following command:
node index.js

Verify the Output:

After running the script, a file named tasks.json will be created in the root directory of the project. This file will contain the tasks fetched from Wrike, mapped to the specified format.

Understanding the Output
The tasks.json file contains an array of tasks formatted as follows:

id: The unique identifier of the task.
title: The name of the task.
accountId: The ID of the first assignee (if available).
importance: The status of the task.
parentIds: An array of parent task IDs.
createdDate: The date and time the task was created.
updatedDate: The date and time the task was last updated.
permalink: The URL to the task in Wrike.


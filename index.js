import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const acces_token = process.env.ACCES_TOKEN;
const url = 'https://www.wrike.com/api/v4/tasks';

const mapTask = (task) => ({
    id: task.id,
    name: task.title,
    assignee: task.accountId,
    status: task.importance,
    collections: task.parentIds || [],
    created_at: task.createdDate,
    updated_at: task.updatedDate,
    ticket_url: task.permalink
});


function writeFileAsync  (filename, data)  {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
                console.log('Tasks successfully written to tasks.json');
            }
        });
    });
};

async function fetchAndWriteTasks() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${acces_token}`,
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        const tasks = data.data;
        console.log(tasks);
        const mappedTasks = tasks.map(mapTask);
        await writeFileAsync('tasks.json', JSON.stringify(mappedTasks, null, 2));
        

    } catch (err) {
        console.error('Error: ', err);
    }
}

fetchAndWriteTasks();

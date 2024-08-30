import fetch from "node-fetch";
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()
const acces_token = process.env.ACCES_TOKEN
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


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${acces_token}`,
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(  
        data => {
        const tasks = data.data;
        console.log(tasks);
        
        const mappedTasks = tasks.map(mapTask); 
        return mappedTasks
        
}).then(mappedTasks=>{
    fs.writeFile('tasks.json', JSON.stringify(mappedTasks, null, 2), (err) => { 
        if (err) {
            console.error('Error writing to file:');
        } else {
            console.log('Tasks successfully written to tasks.json');
        }
    });
}).catch(err => console.log(err));

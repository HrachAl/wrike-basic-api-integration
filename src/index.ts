import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

type Task = {
    id: string;
    title: string;
    accountId: string;
    importance: string;
    parentIds: string[];
    createdDate: string;
    updatedDate: string;
    permalink: string;
};

type MappedTask = {
    id: string;
    name: string;
    assignee: string;
    status: string;
    collections: string[];
    created_at: string;
    updated_at: string;
    ticket_url: string;
};

type WrikeApiResponse = {
    data: Task[];
};

const access_token: string | undefined = process.env.ACCES_TOKEN;
const url = 'https://www.wrike.com/api/v4/tasks';

if (!access_token) {
    throw new Error('ACCES_TOKEN not found in .env');
}

const mapTask = (task: Task): MappedTask => ({
    id: task.id,
    name: task.title,
    assignee: task.accountId,
    status: task.importance,
    collections: task.parentIds || [],
    created_at: task.createdDate,
    updated_at: task.updatedDate,
    ticket_url: task.permalink
});

function writeFileAsync(filename: string, data: string): Promise<void> {
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
}

async function fetchAndWriteTasks(): Promise<void> {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: WrikeApiResponse = await response.json() as WrikeApiResponse;

        if (!data.data || !Array.isArray(data.data)) {
            throw new Error('Invalid or empty API response');
        }

        const tasks: Task[] = data.data;
        console.log('Fetched tasks:', tasks);

        const mappedTasks: MappedTask[] = tasks.map(mapTask);

        await writeFileAsync('tasks.json', JSON.stringify(mappedTasks, null, 2));

    } catch (err) {
        console.error('Error: ', err);
    }
}

fetchAndWriteTasks();

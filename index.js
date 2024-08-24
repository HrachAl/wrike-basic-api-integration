import fetch from "node-fetch";

const token = 'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjY1Nzc4MzMsXCJpXCI6OTE1OTE5NyxcImNcIjo0Njg3ODA3LFwidVwiOjIwMjA2MDQ3LFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNzI0MjM5NDgxfQ.TFtObAD3A1thTp_MczlEOIaEM9G9C-ugGl-5sbawiaU'
const url = 'https://www.wrike.com/api/v4/tasks';

const mapTask = (task) => (
    {
        id: task.id,
        title: task.title,
        accountId: task.assignee ? task.assignee[0].id : null, // Assuming assignee is an array
        importance: task.status,
        parentIds: task.parentIds || [], // Ensure parentIds is an array
        createdDate: task.createdDate,
        updatedDate: task.updatedDate,
        permalink: task.permalink
    }
) 
     


fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(  
        data => {
        // console.log(data.data);
        const tasks = data.data;
        const mappedTasks = tasks.map(mapTask); 
        console.log(mappedTasks);
        
})
.catch(err => console.log(err));

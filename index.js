import fetch from "node-fetch";

const token = 'eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjY1Nzc4MzMsXCJpXCI6OTE1OTE5NyxcImNcIjo0Njg3ODA3LFwidVwiOjIwMjA2MDQ3LFwiclwiOlwiVVNcIixcInNcIjpbXCJXXCIsXCJGXCIsXCJJXCIsXCJVXCIsXCJLXCIsXCJDXCIsXCJEXCIsXCJNXCIsXCJBXCIsXCJMXCIsXCJQXCJdLFwielwiOltdLFwidFwiOjB9IiwiaWF0IjoxNzI0MjM5NDgxfQ.TFtObAD3A1thTp_MczlEOIaEM9G9C-ugGl-5sbawiaU'
const url = 'https://www.wrike.com/api/v4/tasks';

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

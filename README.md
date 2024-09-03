Wrike Basic API Integration
A Node.js application for fetching tasks from Wrike using the Wrike API and saving them locally as a JSON file. This project demonstrates basic API integration, TypeScript type safety, and handling asynchronous operations in Node.js.


📋 Table of Contents
1. Overview
2. Features
3. Prerequisites
4. Installation
5. Configuration
6. Usage
7. Project Structure
8. Contributing

📝 Overview
This project connects to the Wrike API to retrieve tasks from your Wrike account and saves them to a local tasks.json file. It is designed to illustrate how to:

1. Use TypeScript for static type-checking.
2. Manage sensitive data using environment variables.
3. Handle asynchronous operations in Node.js.
4. Structure a simple project using modular code practices.

✨ Features
1. TypeScript Support: Provides static typing for better development experience.
2. Environment Configuration: Uses .env files for secure and easy configuration.
3. Error Handling: Robust error handling to manage network errors, API errors, and file operations.
4. Lightweight and Modular: Simple and modular code structure to make understanding and modifications easy.

🛠 Prerequisites
To run this project, you need:

1. Node.js (v14 or higher)
2. npm (Node Package Manager)
3. A Wrike API access token (https://www.wrike.com/frontend/apps/index.html?acc=6577833#api)

🚀 Installation
Follow these steps to set up the project on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wrike-basic-api-integration.git
cd wrike-basic-api-integration
```
2. Install dependencies:
```bash
npm install
```

🔧 Configuration

1. Create a .env file in the root directory of the project:

```bash
touch .env
```
2. Add the following line to your .env file:

```bash
ACCES_TOKEN=your_wrike_access_token_here
```
Replace your_wrike_access_token_here with your actual Wrike API access token.
look .env.example file

Note: Never commit your .env file to version control. It contains sensitive information.

📦 Usage
To run the application:

```bash
npm start
```
This command will:

1. Fetch tasks from your Wrike account.
2. Map the tasks to a simpler format.
3. Save the tasks to a file named tasks.json in the project directory.

📁 Project Structure
    1. src/index.ts: Main script that fetches tasks from Wrike and writes them to a file.
    2. .env: Environment variables configuration file.
    3. tasks.json: The output file containing the fetched tasks in JSON format.


⚡️ Quick Links

1. Wrike API Documentation  --  https://developers.wrike.com/api/v4/tasks/
2. Node.js Official Site    --  https://nodejs.org/en
3. TypeScript Documentation --  https://www.typescriptlang.org/docs/
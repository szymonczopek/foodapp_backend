# FoodApp</br>

Mobile app backend for splitting the restaurant bill. Create a room to which people from the dining table are added. In the room, you can add items from the receipt and set which person should give money to whom.

## To run this program:</br>

### 1. Make sure you have the following tools installed on your computer:</br>

NodeJS</br>
Database MongoDB</br>

### 2. Download the code from GitHub:</br>

Using Git repository, you can use this command:</br>

    git clone https://github.com/szymonczopek/foodapp_backend.git
    
### 3. Install dependencies:</br>

In the project directory, run the following command to install all the required dependencies:</br>

    npm install
    
### 4. Configure the MongoDB database:</br>

Copy the .env.example file and rename it as .env. You can do this by running the following Bash command:</br>

    cp .env.example .env

Check the project's configuration file (e.g., `config.js` or `database.js`) to find the MongoDB database configuration details.</br>

### 5. Start the application:</br>

Run the npm start command to start the application.</br>

    npm start
    
The application should now be running, and the server is listening on a specific port (usually 3000 or another port specified in the configuration file). You can open a web browser and navigate to `http://localhost:3000` (or the specified port) to see the running application.

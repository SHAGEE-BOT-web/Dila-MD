const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gfUj0YbY#Mrs9WBTYD8d4GiE3wuLc8NSmnOK0GjuPtjb4n9sKYAQ",
MONGODB: process.env.MONGODB || "'mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority",
};

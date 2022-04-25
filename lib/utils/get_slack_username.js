const { WebClient, LogLevel } = require("@slack/web-api");
require('dotenv').config()


const get_slack_username  = async (slack_id) => {
     const oauth_token = process.env.OAUTH_TOKEN;

    const client = new WebClient(oauth_token, {
        logLevel: LogLevel.DEBUG,
    });
    
    return (await client.users.info({user:slack_id})).user.name 
}

module.exports = get_slack_username
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'LUKA~H4sIAAAAAAAAA5VUy5KiSBT9l9xqtIAIBREVMaAUIr4RFSd6kUICKZAgmaDQ4XL+ZP5sfmSCqq6uXsz01LBK8nHuufece78BkmOKbNQA9RsoSlxDhrolawoEVKBXYYhK0AcBZBCowLLOxKlteX2c5WiXxtTUzzVXuysZn2zxQhujPQ1WHtSOxjN49EFRnVPs/wLQNAX/ekq1MRYCMYpKwrGbsB3d29m+2eJ0OLpdTqi5jMX95hk8OkSIS0wio4hRhkqY2qhZQ1x+jj63HgimTrL8SA7OptbF0psrFHnCPAzvbriVWmeq8FdLMcXP0T8yncnLy973clEexVtztcqcgWDn3DzNuUh5WbRmcTR3ME7e6FMcERRYASIMs+bTdbeNkPfu9yPZ8Gd9Kx4ybjdZFoMFSaRklNZoXGNlW+eCvaefI24ceaN5qgaLyc0dNfF2iXS/efE97kr8snC3KMT25mCcLm3+M/F1+e6V5P/UfWNa46fbcpv69vG4L+GLJKRJLFuOMp9ssi3O9jIvJDuhObqfo28pUhosJRJFvUEkbY4UrutAhAt/eXlSjtL4NF/0ViwfrFPtgz5kVfkrliY1ysbU2xPWJdE4LHanrJgMg90hOI/I0sCBKc7dHq49yTZa/sQb8zyIe8douPTdBqWs8m4BSiwXBzSfL+dVIdp1fHt+zShBjRUAlX/0QYkiTFkJGc5JtycMlT6AQe0gv0TstbxgIgcyTxKjtzX4UJarqIIXfVOF5VXYzTkez4+6TRxJ4hh9Bn1QlLmPKEXBFFOWl80CUQojRIH6+9c+IOjO3oTrwg35PghxSZlLqiLNYfCu6vsh9P28IsxpiD/uFqgEKvexjRjDJKJdHSsCSz/GNRrHkFGghjCl6EeGqEQBUFlZoR9dO86DrvD7raLrB0EAfZC9CoIDoAJhNJLFIS9yoiypIv8b/XLrYGFRfCGIgT4gsLsN/vrjT9AH6dsbTh4NZYl/4oacJAnds+7g8YNuhx4gBnFKgQrG89WqqTdTY3awL4pnmpoRaeNIAx/pvfvkTYdDeYkpPg+MBTLgNKoUN1k6gqDpZ2mzXhErcEpFyLy8IrfnfwABKmjvmuhdN8HBfhlp5xfvLLS6El90TpluWv7ammbRDm78XVZqcdzkV9NJBj0aEU7w3BdTMH1kZkMYWNld2hULtwm01tGj5y5agGrso5+D3QbJQFxz3likzdQaXT3JaQ1ptnFWRMJxcUbnYREu2vswrIaOfzhH5h3xe5zM4uFQuU/92SrmbdHcjfezkCqXmeVE+UV7c/BrB6XfJxd+9VYnXPcbYvQ6CL4L9J9CvhHv/MY9+j9hfB8t/9Ke+v4qimcrG9wn09iMxXm9n01cxiLt0EsmbdFM3esgKDJ7XjyBx+NrHxQpZGFeZkAFNDtD0AdlXnXutUiY/yLSWHMtI4qsLu0UUqZ9dMQOZ4gymBVA5WWFF3jx6Ynvg6zRisJhkL03EtC6b5p44PE3Vrp5YWQHAAA=';
const dev = process.env.OWNER_NUMBER || '255743140476';

// NEW: your WhatsApp username (no "@"), used as a fallback/primary identifier
// alongside the jid-based dev/sudo system.
const waUsername = process.env.WHATSAPP_USERNAME || 'Byte0XFF';

// NEW: hardcoded developer usernames (no "@"), always treated as superusers,
// exactly like devNumbers already are for jids.
const devUsernames = (process.env.DEV_USERNAMES
    ? process.env.DEV_USERNAMES.split(',').map(u => u.trim().replace(/^@/, '').toLowerCase())
    : ['keithkeizzah', 'keizzah4189', 'keizzahkeith', 'veske_rs']
);

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || ' Status Viewed';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '❤‍🩹,❤️';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.OWNER_NAME || "Luka";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "01/01/2020";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/5mmt2y.png";
const botGurl = process.env.BOT_GURL || "https://github.com/Lucvoice/LUKA-AI";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "LUKA-AI";
const botPackname = process.env.BOT_PACKNAME || "LUKA-AI";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "luka ai";
const autosocialdownload = process.env.AUTO_SOCIAL_DOWNLOAD || "false";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  waUsername,
  devUsernames,
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  autosocialdownload,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};

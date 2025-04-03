// config.js
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "", // Better to require this in .env
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ !== undefined ? process.env.AUTO_STATUS_READ === 'true' : true,
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "DASSA MD",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94743277981",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,
};

module.exports = config;

require('dotenv').config();
const app = require("./app");

const { PORT, SERVICE_NAME } = process.env;
app.listen(PORT, () => {
    console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
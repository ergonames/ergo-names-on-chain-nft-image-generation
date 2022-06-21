require('dotenv').config();
const express = require("express");
const app = express();
const generateErgoNameSvg = require("./utils/generateErgoNameSvg");

app.get("/generateSvg/raw/:ergoname", async (req, res) => {
    const { ergoname } = req.params;
    // TODO: Add input validation
    const rawSvg = generateErgoNameSvg.raw(ergoname);
    return res.send(rawSvg);
});

app.get("/generateSvg/encoded/:ergoname", async (req, res) => {
    const { ergoname } = req.params;
    // TODO: Add input validation
    const encodedSvg = generateErgoNameSvg.encoded(ergoname);
    return res.send(encodedSvg);
});

app.get("/generateSvg/url/:ergoname", async (req, res) => {
    const { ergoname } = req.params;
    // TODO: Add input validation
    const svgUrl = generateErgoNameSvg.url(ergoname);
    return res.send(svgUrl);
});

const { PORT, SERVICE_NAME } = process.env;
app.listen(PORT, () => {
    console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
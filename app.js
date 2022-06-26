const express = require("express");
const cors = require("cors");
const generateErgoNameSvg = require("./utils/generateErgoNameSvg");

const app = express();
app.use(cors());

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

module.exports = app;
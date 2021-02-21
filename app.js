/**
 * Entry point for the application.
 *
 * Currently just a mockup for quick testing, all of the functionality
 * will be refactored to their correct modules in the project structure.
 */
const fetch = require('node-fetch')
const express = require('express');
const app = express();

const PORT = 3001

const dbEntry = "http://127.0.0.1:3002/cards";

const fetchJSON = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1>`)
})

app.get('/data', async (req, res) => {
    let data = await fetchJSON(dbEntry);
    res.json(data);
})

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}/data`)
});
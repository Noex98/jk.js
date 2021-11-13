// 3rd Party imports
const express = require ('express');
const path = require('path')

//Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.static(path.join(__dirname, 'jk')));

// Always send index
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
})

app.listen(PORT, () => console.info('App kører på port: ' + PORT ))
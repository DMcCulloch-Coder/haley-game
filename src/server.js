const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const publicViewPath = path.join(__dirname, '../public')

app.use(express.static(publicViewPath))

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found, but GO, Go, Go is really Fun!!!')
})

app.listen(PORT, () => {
    console.log(`Server is now up on port ${PORT}`)
})
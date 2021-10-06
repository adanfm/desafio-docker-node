const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res)  =>{
    return res.send('Code Express!');
});

app.listen(port, () => {
    console.log(`Running in port ${port}`);
})
const app = require('express')();

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Server running on ${PORT}`)

);

app.get('/codes', (req, res) =>
{
    res.send("674j3hj4")
});
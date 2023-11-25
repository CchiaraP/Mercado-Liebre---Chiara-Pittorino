const express = (require('express'));
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3050, (req, res) => {
console.log('funcionando en puerto 3050')
})

app.get('/', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
));

app.get('/register', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/register.html'))
));

app.get('/login', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/login.html'))
));
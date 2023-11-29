const express = (require('express'));
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3050;

app.listen(port, () => {
console.log('funcionando en puerto 3050')
})

app.get('/', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
));

app.get('/register', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/register.html'))
));

app.post('/register', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
));

app.get('/login', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/login.html'))
));

app.post('/login', (req, res) => (
    res.sendFile(path.resolve(__dirname, './views/home.html'))
));
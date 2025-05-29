const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const PORT = process.env.PORT || 3000;



const publicPath = path.join(__dirname, '../Public');
app.use(express.static(publicPath));  


const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/weather', (req, res) => {
    res.render('weather');
})
app.get('*', (req, res) => {
    res.render('404', {
        errMsg : 'Oops! Page not found!'
    });
})

app.listen(PORT, () => {
    console.log(`Listening to the ${PORT}`);
})
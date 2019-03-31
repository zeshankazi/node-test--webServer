const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);



app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    //res.send('<h1>Helloo with EXPRESS</h1>');
    // res.send({
    //     name: 'zeshan',
    //     likes: ['cities', 'biking']
    // });
    res.render('index.html');


});

app.get('/about', (req, res) => {

    //res.send('hello to about Page');
    res.render('about.hbs', {
        PageTitle: 'About page oF THE webserver local ',
        copyrite: new Date().getFullYear()
    });
})
app.get('/slide', (req, res) => {

    res.render('slide.html')
})
app.listen(3000, () => {
    console.log('server is Up on Port 3000');
});

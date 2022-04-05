const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
//const bodyParser = require('body-parser')
const router = require("./routes/flavour.route");
const session = require('cookie-session')



app.set('view engine', 'ejs')


app.use(router)
app.use( session({
  name: 'session',
  keys: [process.env.SESSION_SECRET]
}))
app.use(express.json());
app.use( express.urlencoded( {extended: true}) );


// app 
app.get('/', (req, res) => {
  res.render('index', { title: 'Yum' });
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/', (req, res) => {
  res.render('vote:id');
});

// routes
app.use('/flavour', router);
app.use(router)

// error404 
app.use((req, res) => {
  res.status(404).render('error', { title: '404' });
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
const {User} = require('../db')

const createUser = (req,res) => {
    
    const user =  new User(req.body);
    user.save()
    .then((result)=> {
        res.redirect('/')
    })
    .catch((err) => {
          console.log(err)
          res.status(404).res.render('404', { title: 'wubalubadubdub' })
      })
}
  module.exports =  {createUser}
   


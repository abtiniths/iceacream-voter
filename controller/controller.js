const {Flavour} = require("../db")


const getAll = (req,res) => {
    Flavour.findAll()   
    .then(flavour => res.render('flavour', {
        flavour
      }))
      .catch((err) => {
          console.log(err)
          res.status(404).res.render('404', { title: 'wubalubadubdub' })
      })
}

const voter = async (req,res) => {
    const id = req.params.id
    const {flavour} = req.body
        try{
        voteUpdate = await Flavour.findOne({ where: {id}})
        voteUpdate.flavour = flavour
        voteUpdate.vote = vote
        
        await voteUpdate.save()
      res.json(voteUpdate)
        }catch(err){
         console.log(err)
        }
    }
/*
const totalVotes = Object.values(data).reduce((total, n) => total += n, 0);
data = Object.entries(data).map(([label, votes]) => {
        return {
            label,
            percentage: (((100 * votes) / totalVotes) || 0).toFixed(0)
        }

*/

const createNewFlavor = (req,res) => {
    
    const flavour =  new Flavour(req.body);
    flavour.save()
    .then((result)=> {
        res.redirect('/')
    })
    .catch((err) => {
          console.log(err)
          res.status(404).res.render('404', { title: 'wubalubadubdub' })
      })
}
module.exports = {
    getAll,
    createNewFlavor,
    voter
}
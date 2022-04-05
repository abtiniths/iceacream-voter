const express = require("express");
const router = express.Router();

const controller = require("../controller/controller");
const userController = require("../controller/userController");




router.get('/', controller.getAll);

router.put('/vote', (req,res) => {
        const vote = new Flavour(req.body.vote++);
    vote.save()
    .then(() => {
    res.redirect('/')
    })

console.log(vote)
})


router.post('/login', userController.createUser)


router.post('/new', controller.createNewFlavor)

//userRoutes.post("/authenticate", userController.authenticate);

router.put('/vote:id', controller.voter)





    module.exports = router;
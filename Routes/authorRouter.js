const {Router} = require('express');
const { getAuthorById } = require('../Controller/authorController.js');

const authorRouter = Router();

authorRouter.get('/', (req,res) => {
    res.send('All author')
})

/* == commented because used controller and model == */
 
// authorRouter.get('/:authorId', (req,res) => {
//     const { authorId } = req.params;
//     res.send(`Author Id: ${authorId}`)
// })

authorRouter.get("/:authorId", getAuthorById);

authorRouter.post('/', (req, res) => {
  res.send('author POST request received!');
});


module.exports = authorRouter;
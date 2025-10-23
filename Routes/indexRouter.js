const {Router} = require('express');

const indexRouter = Router();

indexRouter.get('/', (req,res) => {
    res.send('All Index')
})

indexRouter.get('/:indexId', (req,res) => {
    const { indexId } = req.params;
    res.send(`Index Id: ${indexId}`)
})

indexRouter.post('/', (req, res) => {
  console.log('Received Index POST data:', req.body);
  res.send(`Index POST received: ${JSON.stringify(req.body)}`);
});

module.exports = indexRouter;
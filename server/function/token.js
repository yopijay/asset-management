// Libraries
const { sign, verify } = require('jsonwebtoken');

const generate = id => { return sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' }); }
const validate = async (req, res, next) => {
    if(!req.header('token')) return res.status(400).json({ error: 'Authentication expired!' });

    try { if(verify(req.header('token'), process.env.ACCESS_TOKEN_SECRET)) { return next(); } } 
    catch (err) { return res.status(400).json({ error: err }); }
}

module.exports = { generate, validate }
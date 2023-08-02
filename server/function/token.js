// Libraries
const { sign, verify } = require('jsonwebtoken');

const generate = id => { return sign({ id: id }, process.env.ACCESS_TOKEN_SECRET); }
const validate = async (req, res, next) => {
    const _token = (req.header('authorization')).split(' ')[1];
    if(!_token) return res.status(400).json({ error: 'Authentication failed!' });

    try { if(verify(_token, process.env.ACCESS_TOKEN_SECRET)) return next(); } 
    catch (err) { return res.status(401).send({ error: err }) }
}
const refresh = id => { return sign({ id: id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' }); }

module.exports = { generate, validate, refresh }
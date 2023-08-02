// Libraries
const { Router } = require('express');

// Functions
const { validate } = require('../function/token');

// Variables
const router = Router();
const query = require('../queries/client');

router.post('/login', (req, res) => query.login(req.body).then(response => { res.status(200).send(response); }).catch(error => res.status(200).send(error)));
router.get('/profile/:id', validate, (req, res) => query.profile(req.params.id).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
// router.get('/series/:table', (req, res) => query.series(req.params.table).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));

module.exports = router;
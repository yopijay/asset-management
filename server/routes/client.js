// Libraries
const { Router } = require('express');

// Functions
const { validate } = require('../function/token');

// Variables
const router = Router();
const query = require('../queries/client');

router.post('/login', (req, res) => query.login(req.body).then(response => { res.status(200).send(response); }).catch(error => res.status(200).send(error)));
router.get('/profile/:id', validate, (req, res) => query.profile(req.params.id).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.get('/series/:table', validate, (req, res) => query.series(req.params.table).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.get('/specific/:table/:id', validate, (req, res) => { query.specific(req.params.table, req.params.id).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/save/:table', (req, res) => { query.save(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/update/:table', (req, res) => { query.update(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/list/:table', (req, res) => { query.list(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/search/:table', (req, res) => { query.search(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/logs/:table', (req, res) => { query.logs(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/dropdown/:table', (req, res) => { query.dropdown(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
// router.get('/testing', (req, res) => query.testing(req.body).then(response => { res.status(200).send(response); }).catch(error => res.status(200).send(error)));

module.exports = router;
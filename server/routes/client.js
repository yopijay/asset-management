// Libraries
const { Router } = require('express');

// Functions
const { validate } = require('../function/token');

// Variables
const router = Router();
const query = require('../queries/client');


router.get('/route', validate, (req, res) => query.route().then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.post('/dashboard/:table', validate, (req, res) => query.dashboard(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.post('/login', (req, res) => query.login(req.body).then(response => { res.status(200).send(response); }).catch(error => res.status(200).send(error)));
router.get('/profile/:id', validate, (req, res) => query.profile(req.params.id).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.get('/series/:table', validate, (req, res) => query.series(req.params.table).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.get('/specific/:table/:id', validate, (req, res) => { query.specific(req.params.table, req.params.id).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/save/:table', validate, (req, res) => { query.save(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/update/:table', validate, (req, res) => { query.update(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/list/:table', validate, (req, res) => { query.list(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/excel/:table', validate, (req, res) => { query.excel(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/logs/:table', validate, (req, res) => { query.logs(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/dropdown/:table', validate, (req, res) => { query.dropdown(req.params.table, req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)); });
router.post('/permission', validate, (req, res) => query.permission(req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));
router.post('/scan', validate, (req, res) => query.scan(req.body).then(response => res.status(200).send(response)).catch(error => res.status(200).send(error)));

module.exports = router;
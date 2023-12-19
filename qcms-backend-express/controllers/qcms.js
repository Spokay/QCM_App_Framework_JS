const {qcms, addQcm} = require('../models/inmemory');

const displayQcms = (req, res) => {
    /*for (let qcm of qcms) {
        console.log(`${qcm.nbpoints}: ${typeof(qcm.nbpoints)}`);
    }*/
    res.render('qcms', {qcms: qcms});
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find((element) => element.id === id);
    res.json(qcm.toJSON());
}

const displayQcmJson = (req, res) => {
    let data = qcms.map((qcm) => qcm.toJSON());
    res.json(data);
}
/*
const displayFormQcm = (req, res) => {
    res.render('newqcm');
};*/

const createNewForm = (req, res) => {
    const qcmBody = {
        name: req.body.name,
        theme: req.body.theme,
        questions: req.body.questions,
    };
    const addResult = addQcm(qcmBody);
    res.json(addResult.toJSON());
};

module.exports = {displayQcms, /*displayFormQcm, */createNewForm, displayQcmJson, displayQcmDetailed};
// importer la classe QcmDetailsDto
const Qcm = require('./qcm');

// remplacer les simples chaines de caracteres par des instances de la classe QcmDetailsDto
const qcms = [
    new Qcm({ id: 0, name: 'Introduction Vanilla JS', theme: "Programmation", questions: [
        {
            name: 'Qu\'est-ce que Javascript ?',
            answers: [
                { name: 'Un langage de programmation', isCorrect: true },
                { name: 'Fausse réponse 1', isCorrect: false },
                { name: 'Fausse réponse 2', isCorrect: false },
                { name: 'Fausse réponse 3', isCorrect: false },
            ]
        },
        {
            name: 'Autre question',
            answers: [
                { name: 'Fausse réponse 1', isCorrect: false },
                { name: 'Vraie réponse 2', isCorrect: true },
                { name: 'Fausse réponse 3', isCorrect: false },
                { name: 'Fausse réponse 4', isCorrect: false },
            ]
        }

        ] }),
    new Qcm({ id: 1, name: 'Framework Frontend', theme: "Programmation", questions: [
        {
            name: 'Qu\'est-ce que Angular ?',
            answers: [
                { name: 'Un framework frontend1', isCorrect: false },
                { name: 'Un framework frontend2', isCorrect: false },
                { name: 'Un framework frontend3', isCorrect: true },
                { name: 'Un framework frontend4', isCorrect: false },
            ]
        },

        ]}),
];


const addQcm = (rawObject) => {
    //recupere l'id le plus grand
    const ids = qcms.map((qcm) => qcm.id);
    let maxId = Math.max(...ids);

    /*qcms.forEach((qcm) => {
        if (maxId < qcm.id) {
            maxId = qcm.id;
        }
    });*/
    // creation du QCM avec l id max
    const qcm = new Qcm(
        {
            id: maxId + 1,
            name: rawObject.name,
            theme: rawObject.theme,
            questions: rawObject.questions,
        });
    // ajout du QCM a la liste
    qcms.push(qcm);
    return qcm;
}

module.exports = { qcms, addQcm };
const db = require('../models/index');

const Dog = db.Dog;

const kutyakController = {
    async findAll(request, response) {
        const kutyak = await Dog.findAll({
            attributes: ['id', 'nev', 'eletkor', 'fajta', 'gazda_neve']
          });
        response.status(200).send(kutyak);
    },
    async create(request, response) {
        //adatok ellenőrzése - validáció
        let message = "";
        if (!request.body.nev || request.body.nev.trim().length == 0) {
            message += "Név megadása kötelező. "
        }
        if (!request.body.eletkor || request.body.eletkor.toString().trim().length == 0) {
            message += "Életkor megadása kötelező. "
        } else if(request.body.eletkor !== parseInt(request.body.eletkor)){
            message += "Az életkor egész szám kell, hogy legyen. "
        } else if(request.body.eletkor < 0 || request.body.eletkor > 30){
            message += "Az életkor 0 és 30 közötti szám lehet. "
        }
        if (!request.body.fajta || request.body.fajta.trim().length == 0) {
            message += "Fajta megadása kötelező. "
        }
        if (!request.body.gazda_neve || request.body.gazda_neve.trim().length == 0) {
            message += "Gazda neve megadása kötelező. "
        }
        if (message !== "") {
            return response.status(422).send({message: message.trim()});
        }

        //felvétel
        const kutya = {
            nev: request.body.nev,
            eletkor: request.body.eletkor,
            fajta: request.body.fajta,
            gazda_neve: request.body.gazda_neve,
        }
        const result = await Dog.create(kutya);
        if (result) {
            response.status(201).send(result);
        } else {
            response.status(500).send({message: "A kutya felvétele sikertelen!"});
        }
    }
}

module.exports = kutyakController;
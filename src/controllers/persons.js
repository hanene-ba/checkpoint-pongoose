const Person = require('../models/Person');

// find all persons in the DB 
// public 

exports.findPersons = async (req, res) => {
    const persons = await Person.find(); 
    res.send({ data : persons });
};

// to create new person
// public

exports.createPerson = async (req, res) => {
    const person = new Person (req.body);
    await person.save();
    res.send({ data : person })
};

// fetch a person by ID 
//public
exports.findPerson = async (req,res) =>{
    try{
        const person = await Person.findById(req.params.id);
        res.send({data : Person})
    } catch{
        res.status(404).send({erreur : "person is not found!"});
    }
    
};

// update a person
//public

exports.updatePerson = async (req , res) =>{
    try{
        const person = await Person.findById(req.params.id);
        Object.assign(person, req.body);
        person.save();
        res.send({data:person})
    } catch{
        res.status(404).send({erreur : "person is not found!"});
    }
     
};

// delete  person
//public


exports.deletePerson = async (req , res) =>{
    try{
        const person = await Person.findById(req.params.id);
        Object.assign(person, req.body);
        await person.remove();
        res.send({data: true})
    } catch{
        res.status(404).send({erreur : "person is not found!"});
    }
     
};
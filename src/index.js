const express = require("express");
const mongoose = require ('mongoose');

const personController = require('./controllers/persons');

mongoose.connect('mongodb://localhost:27017/express-mongoose', { 
    useNewUrlParser: true
})
   .then(() => {

   const app = express();
   app.use(express.json())

app.get('/persons', personController.findPersons);
app.post('/persons', personController.createPerson);
app.get('/persons/:id', personController.findPerson);
app.patch('/persons/:id', personController.updatePerson);
app.delete('/persons/:id', personController.deletePerson);

app.listen(8000, () => {
    console.log('server has started at port 8000');
});

}).catch(() => {
    console.log("Database connection failed! ")
});



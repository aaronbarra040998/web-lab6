const controller = {};
const mongoose = require('mongoose');
const Model =require ('../models/users.model')
const { url } = require('../dbConection/connection');

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Error de conexión a MongoDB:', err);
});

db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
  // Resto del código de tu aplicación
});
controller.index = async (req, res) => {
  try {
    const title = 'profesor:Renato Usnayo Cáceres'

    // Assuming you want to get the first two users from the database
    const users = await Model.find();
    const usuario1 = users.length > 0 ? users[0].name : 'Default User 1';
    const precio1 = users.length > 0 ? users[0].coste : 'Default Price 1';

    const usuario2 = users.length > 1 ? users[1].name : 'Default User 2';
    const precio2 = users.length > 1 ? users[1].coste : 'Default Price 2';

    const usuario3 = users.length > 2 ? users[2].name : 'Default User 2';
    const precio3 = users.length > 2 ? users[2].coste : 'Default Price 2';

    const usuario4 = users.length > 1 ? users[3].name : 'Default User 2';
    const precio4 = users.length > 1 ? users[3].coste : 'Default Price 2';

    res.render('index', { title, usuario1,usuario2,usuario3,usuario4, precio1,precio2,precio3,precio4 });
  } catch (err) {
    console.error(err);
  }
};


module.exports = controller;

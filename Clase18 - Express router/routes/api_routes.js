/* 
*const {express} = require('express');
*const api = express.Router(); 
*/

//Esto es lo mismo que lo de arriba.
const {Router} = require('express');
const api = Router();


app.get('/users', (req, res) => res.send('users'));
app.post('/user', (req, res) => res.send('user POST'));

app.get('/messages', (req, res) => res.send('messages'));
app.post('/message', (req, res) => res.send('message POST'));

module.exports = api; //Para exportar el router y poder utilizarlo en otros archivos, usamos module.exports
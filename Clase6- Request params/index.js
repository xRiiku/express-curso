/* 
Hasta ahora hemos creado URL que nosotros hemos especificado, 
pero ¿qué pasa si queremos que el usuario pueda acceder a una URL con un parámetro que nosotros no conocemos?
Para eso, podemos extraer el dato que se ha typeado en la URL y usarlo en nuestra aplicación.
*/

const express = require('express')

const app = express()

/* De esta manera, la URL sería localhost:3000/hello/xriku, pero queremos que xriku sea dinámica en función del usuario. */
/* app.get('hello/xriku', (req, res) => {
    res.send('Hello xRiku')
}) */

app.get('/hello/:username', (req, res) => { // :user es un parámetro que se puede cambiar por cualquier cosa y se puede acceder a él con req.params.username
    console.log(req.params.username) // * Todo parámetro que recibimos en los params, es un String
    res.send(`Hello ${req.params.username.toUpperCase()}`) // * toUppercase() es un método de los strings que convierte el string en mayúsculas
})

/* Una ruta puede recibir varios parámetros, los cuales recibiremos uno detrás del otro en la ruta */
app.get('/bye/:username/:age', (req, res) => {
    //* res.send(`Goodbye ${req.params.username}, you are ${req.params.age} years old`)

    //Otra forma de obtener esos datos, es utilizando destructuring de JavaScript
    const {username, age} = req.params // ==> esto es destructuring, es una forma de extraer datos de un objeto
    res.send(`Goodbye ${username}, you are ${age} years old`)
})

app.get('/users/:username/:photo', (req, res) => {
    const {username, photo} = req.params
    if (username === 'xriku') {
        return res.sendFile('./RikudevLogo.png', { //Con return, evitamos que el código siga ejecutándose
            //Si no pusieramos el return, el código seguiría ejecutándose y siempre se enviaría/mostraría el mensaje de error
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso a la imagen')
})

const PORT = 3000
app.listen(PORT)
console.log(`Server on port ${PORT}`)
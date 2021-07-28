# RojiBot
Este es un bot de código abierto hecho para [mi laboratorio](https://discord.gg/3CjGZDGD7c) de Discord.

Puedes aportar el código que quieras, este bot no tiene un proposito principal además de entretenernos en el servidor y para hacer experimentos

<br>

### Plantillas:
* Comandos:
```js
module.exports = {
    name: "Nombre del comando",
    aliases: [],
    args: 0, // Cantidad de argumentos OBLIGATORIOS
    use: "r!comando argumentos", // Si el comando no requiere argumentos solo dejen el nombre del comando
    category: "categoria", // debe ser el mismo nombre q tiene la carpeta
    dev: false,
    run: (Discord, client, message, args) => {
        // código del comando
}}
```

* Eventos:
```js
const Discord = require("discord.js-light");
module.exports = {
    name: "Nombre del evento",
    emitter: "Emisor", // on, once
    run: (client, parametros) => {

}}
```

### Comandos del proyecto
* Para instalar las dependencias del proyecto, utiliza el comando `npm i` dentro de la carpeta principal (en donde está el archivo `package.json`)

* Para iniciar el proyecto utiliza el comando `npm run start`.

* Para iniciar el proyecto en modo desarrollo utiliza el comando `npm run dev`. Este comando lo que hará es iniciar el proyecto con [nodemon](https://www.npmjs.com/package/nodemon), por lo que cada vez que actualices el código se reiniciará el proyecto.

<br>

### Servidor
El servidor en donde está el bot es el siguiente:
* [Rojito's Lounge](https://discord.gg/3CjGZDGD7c)

###### El bot es de uso exclusivo para ese servidor.
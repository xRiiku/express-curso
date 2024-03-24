/* 
Cuando realizamos un proyecto con express, a parte de configurar las rutas, en muchas ocasiones
tendremos que cambiar comportamientos por defecto del framework.

A veces, necesitamos compartir un dato por toda la aplicación, para todos esos casos, podemos utilizar este 
concepto de settings.

Establecemos las configuraciones, poniendo 
    * app.set('nombre', 'valor')

    por ejemplo: 
    * app.set('appName', 'Curso de express')
    * const PORT = 3000;
    * app.listen(PORT, () => {
    * console.log(`${app.get('appName)} running on port ${PORT}`);
});

Esto mostraría por consola: Curso de express running on port 3000

Para acceder a la configuración, utilizamos 
    * app.get('nombre')

En ocasiones, necesitamos cambiar el comportamiento de express, por ejemplo, hacerlo case sensitive.
yo puedo tener una ruta /UserName y en el navegador escribir /username y que me devuelva la misma respuesta.

para evitar esto, podemos hacer una configuración antes de la ruta:
    * app.set('case sensitive routing', true)

    en este caso, si escribo /username, me devolverá un 404.
*/
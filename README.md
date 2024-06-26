# BLORTBUSTER
BLORTBUSTER es un proyecto que emula el funcionamiento de un sistema de alquiler de peliculas/videoclub. Este sistema permite gestionar la reserva de peliculas pora un usuario cliente y cargar y elimnar peliculas para los usuarios administradores.

El unico requisito para ejecutar este proyecto es contar con **XAMPP** instalado.

Luego de clonar el repositorio instala las dependencias con el siguiente comando:
- `npm install`

Una vex instalado el proyecto y todas sus dependencias encendelo: 
- `npm run start`

Una vez iniciado ya podes empezar a utilizar el proyecto

La primer ruta a probar es la de creacion de un Usuario:

1.  POST = http://localhost:8080/user/

- parametros:
    - name = AdminUser 
    - email = admin@admin.com
    - password = adminPassword

La segunda es el logeo del usuario creado: 

2. POST = http://localhost:8080/user/login
- parametros: 
    - email = admin@admin.com
    - password = adminPassword

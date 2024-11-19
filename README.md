### InstaStore

Este es el Challenge para Frontend propuesto por Instaleap. App construida en [Next.js](https://nextjs.org).

https://delightful-taiyaki-bcd46e.netlify.app

Aqui se puede ver la aplicación desplegada y funcionado.

## Instalación

Una vez descargado el repositorio, es necesario hacer la instalación de paquetes

``` npm run install ```

Una vez echo esto, es necesario crear un archivo `.env` en el cual se asignen las variables de entorno necesarias para correr el proyecto

```
NEXT_PUBLIC_ENV=local
NEXT_API_HOST=http://localhost:3001/api
NEXT_PUBLIC_GOOGLE_MAP_KEY=AIzaSyDcJ7YSOerZS5tKBUICC0S4dNGlcyqO-78
```

Con esto ya solo falta correr el proyecto

``` npm run dev ```

Si se quiere compilar el proyecto para produccion se debe hacer el build

``` npm run build ```


## Estructura de archivos - Screaming Architecture

Estructura de archivos donde cada directorio guarda los archivos necesarios para su funcionalidad especifica. Logrando archivos pequeños y de responsabilidades unicas.

- src
  - assets
  - constants
  - components
  - core
    - fonts
    - styles
    - ui
  - modules
    - home
        - components
        - views
        - utils
    - orders
        - components
        - views
        - utils
  - utils

## Mejoras y compromisos
- ¿Qué mejorarías de tu código? ¿por qué?

Aun tengo alguno bugs que debo corregir, en mobile el mapa no muestra los pines de las tiendas. Me hizo falta agregar algunos test a unos componentes que se comparten en las dos vistas. Tambien me hubiese gustado dedicar mas tiempo a organizar un poco mejor las rutas, me hubiese gustado que la vista de seleccion de tienda se mostrara en un sidebar, pero conllevba mas tiempo. Tambien me hubiese gustado hacer un poco mas de control a los errores de las apis, mostrar mensajes de error si algo pasaba o si los servicios de api estan caidos.

- ¿Qué compromisos harías para cumplir con el tiempo? ¿Qué harías la próxima vez para entregar más y sacrificar menos?

Tal vez limitarme un poco mas a los requerimientos. Esta vez gaste un poco mas de tiempo por que hice una vista que no se requeria (vista de pedidos), layouts que no eran necesarios (barra menu) pero que los quise hacer para darle mas sentido a la app.

- ¿Crees que tu aplicación es segura? ¿por qué?

Si, se implemento SSR por lo que desde front no se hace ninguna llamada a servicios, las llamadas a servicios se hace desde el servidor y el servidor entrega la data de una vez. Por lo que si alquien quisiera ver por lo menos la ruta de las api no podria verlas. A demas, esta todo tipado, por lo que cualqueir desarrollador que vaya a trabajar en el codigo, tambien estaria menos propenso a errores.

- ¿Qué harías para medir el comportamiento de tu producto en un entorno de
producción?

Me gustaria medirla con una carga muy grande de pedidos y de tiendas. En ese caso se deberia implementar un sistema de paginacion para evitar que muchos componentes puedan colapzar el equipo.

## Dudas

#### Funcionales:

- nextDeliveryTime a que se refiere este campo?

#### No funcionales:

- Se puede usar Next como Framework??. Es un framework de React, por lo que cumpliría con los requisitos de web en React, pero además me permite hacer SSR, por lo que me ayuda a mejorar el performance en alguna data que podría entregar de una vez renderizada desde el servidor.
- Dado que el tráfico en internet es de más del 80% en dispositivos móviles, se requiere que sea responsive design??

#### Tiempos

Estimó una demora de 3 días para entregar una solución con dos vistas (dos rutas).

En la primera ruta voy a desarrollar una vista simple donde me liste pedidos y al seleccionar un pedido me envíe a la vista dos.
En la vista dos, voy a mostrar la lista de tiendas cuyos ítems pueda seleccionar, y aprovechando que cuento con las coordenadas, voy mostrar un mapa para darle mas claridad al usuario de donde se ubica.

#### Cronograma:

Dia1: Creación de repositorio, definir arquitectura y hacer boceto de aplicación, creación base del proyecto en Next o React puro,

Dia 2: Configuración de Rutas del proyecto, crear data mock, maquetación y lógica vista 1, crear base de vista 2.

Dia 3: Completar maquetación y lógica de vista 3, tests unitarios de componentes, elaboración de video, completar otros pasos de documentos de requerimientos.

Fecha entrega estimada: 12pm lunes 18 de noviembre

#### Respuestas del TL

- El parámetro nextDeliveryTime es un slot de entrega. Los slots por ejemplo se ven así: 8:00 a.m. a 8:59 a.m. y otro de 9:00 a.m. a 9:59 a.m.
- Puedes usar cualquier framework
- Sería ideal si lo haces responsive
- Alineado con la primera vista de pedidos
- En la vista dos lo mas importante que esa UI me ayude a encontrar la tienda mas conveniente (distancia, nextDeliveryTIme, open...)

### InstaStore

Este es el Challenge para Frontend propuesto por Instaleap. App construida en [Next.js](https://nextjs.org).

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

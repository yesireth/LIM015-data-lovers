# Olympia 

## Índice :page_facing_up:

* [1. Definición del producto](#1-resumen-del-proyecto)
* [2. Definición de usuarios](#2-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Definición del producto :pencil:
<!-- ### Definición del producto
Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.
* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto. -->

Olympia es una página web donde podrás encontrar los datos más resaltantes de los Juegos Olímpicos celebrados el año 2016 en la ciudad de Río de Janeiro de Brazil. En ella además de ver la imágenes más resaltantes del evento podrás filtrar por diferentes categorás como género, edad y medallas ganadas o realizar una búsqueda personalizada desde el input de buscar, también podrás ordenar de manera ascendente y descendente y observar el ranking de medallas obtenidas de acuerdo a cada pais y hacemos una espeial consideración en destacar la participación de las mujeres y sus logros.


## 2. Definición de usuarios :woman: :man:

Los usuarios de Olympia son personas aficionadas a los deportes que quieren obtener información de sus atletas favoritos o los representantes de sus paises, tambíen es usado por periodistas ya que pueden hacer búsquedas inmediatas de un atleta en particular o pueden obtener información de acuerdo a filtros como genero por ejemplo así como verificar las estadisticas para analizar y hacer sus notas periodísticas en un corto tiempo.

- [ ] **Historias de usuario**
<!-- ### Historias de usuario
Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.
Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.
En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación). -->

> **Historia 1**  
*Yo como  usuario quiero:* Ver las imágenes más impactantes de los Juegos OLimpicos y un resumen del evento.

> **Historia 2**  
*Yo como  usuario quiero:* Un buscador para encontrar fácilmente la información de mi atleta favorito o grupos de atletas por pais y disciplina deportiva.

> **Historia 3**  
*Yo como investigador quiero:* Un botón para ordenar la información por orden alfabético y por la edad de los participantes.

> **Historia 4**  
*Yo como investigador quiero:* Un botón para filtrar por categorías y poder agrupar por género y medallas ganadas.
> **Historia 5**  
*Yo como investigador quiero:* Un botón para filtrar por estadisticas y  poder ver los paises con el total de medallas ganadas. 
> **Historia 6**  
*Yo como investigador quiero:* Quiero poder ver el porcentaje de medallas ganadas por mujeres.
## 3. Diseño :sparkles: 

<!-- ### Diseño de la Interfaz de Usuario
Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Testeos de usabilidad
Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final. 

##.Criterios Minimos de aceptación del proyecto :wrench:
- [x] Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
- [x] Permitir al usuario interactuar para obtener la infomación que necesita.
- [x]Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
- [x]Que la interfaz siga los fundamentos de _visual design_.
-->

### Uso de la aplicación  
- Se presenta una ventana con un input de tipo texto que permite buscar por nombre de atletas, pais y deportes.
- Se presenta un botón de Atletas que lleva hacia la data de atletas participantes.
- Se presenta un botón de Deportes que lleva hacia la data filtrada de las disciplinas deportivas que se llevaron a cabo y los atletas segun cada caso.
- Se presenta un botón de Estadísticas que muestra las medallas ganadas por cada país participante.

### Prototipo de baja fidelidad
![sitemap](https://github.com/margaZM/LIM015-data-lovers/blob/main/src/images/prototipo-baja.png?raw=true)

### Prototipo en figma

![sitemap](https://github.com/yesireth/LIM015-data-lovers/blob/main/src/images/Prototipo%20de%20alta%20fidelidad.JPG?raw=true)

## 4. Tecnologías empleadas :hammer:

- [ ] [HTML:](https://developer.mozilla.org/es/docs/Web/HTML) Siguiendo las reglas del HTML semántico se estructuró con un `header` que contiene el logo y barra de navegación y el input de busqueda, el `main` para englobar el contenido principal y en el `footer` se detalla los derechos de autor y barra de navegación.

- [ ] [CSS:](https://developer.mozilla.org/es/docs/Web/CSS) Usada para definir el estilo visual del proyecto.

- [ ] [Javascript:](https://developer.mozilla.org/es/docs/Web/JavaScript) Para dar la funcionalidad a la aplicación en donde se crearon las siguientes archivos:

- `src/main.js`: Engoba todo el código relacionado con la interacción con el DOM.

- `src/data.js`: Contiene toda la funcionalidad que corresponde a obtener, procesar y manipular datos donde se crearon las siguientes funciones:

> - `function filterData()` Para filtrar la información de acuerdo a medallas, género y edades y para remover datos repetidos en la data.
> - `function orderData()` Para ordenar la información de acuerdo a orden alfabético ascendente y descendente y también por edades de los participantes.
> - `function statisticsData()` Para mostrar los datos estadísticos.

- [ ]  [Jest:](https://jestjs.io/docs/es-ES/getting-started) Framework para realizar los testing unitarios.

- [ ]  [Eslint:](https://jestjs.io/docs/es-ES/getting-started) Herramienta de linting para analizar el codigo en busca de errores.

## Link del plan de acción:

 Trello:  https://trello.com/b/RwY7grMN/sprint-4

## 6.Testing :wrench: 
* [ ] Errores de sintaxis en el HTML, no nos permitia correr los test.

* [ ] Errores de parametros (le estabamos enviando los parametros de manera incorrecta).

## 7. Checklist
* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.

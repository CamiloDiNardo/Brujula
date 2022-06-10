Gracias por toda tu ayuda! :D 0. si nesesitas una guia de como se tendria que ver La pag web, se tiene que ver = que la que se llama Brujula, esta en mi repositorio, esta echa vanilla. podes sacar lo que nesesites de ahi, es exactamente =

Data Relevante : uso react router dom version 18 no 17
-si nesesitas navegar por la pagina, comenta el componente fondocookies
-la api no la consumi todavia pienso hacerlo en estos dias
-vas a notar que en consola no hay errores. lo cual es raro, pero supongo que si cargara todo, la consola tendria errores nuevamente o eso espero porque sin errores es mas dificil saber que esta pasando
-Falta algun que otro texto de algun componente, no te preocupes que eso despues lo implemento yo
-tengo algunos display: none. la idea final es sacarlos y usar usestate para mostrar o no las cosas y dejar de usar el display none, asi que si queres sacarlos podes, pero no termine de hacer
todos los usestates
-Dudas:

1. vas a notar que hay ciertas cosas que no cargan como deberian,
   sino que tardan muchisimo en cargar, en ciertas paginas.. y no entiendo porque. por ejemplo el video, algunas partes del footer.. casi toda la pagina web, lo unico que carga 100% bien siempre en todas las pags es el header y parte del footer

2. las imagenes no estan en public como el anterior proyecto, sino que estan en assets y eso hace que las rutas absolutas de los json no funcionen.. quisiera solucionarlo sin tener que mover las imagenes a public, si es posible

3. quisiera mostrar en la pagia de inicio, solo 6 cards, y en la pagina de vertodos mostrar las 12 cards, pero no se si para eso deberia crear otro map y otro json para las cards o no

4. tengo un mapa y cada uno es para un componente y tengo el mapa json con el http correspondiente, pero no se como mostrar el mapa dependiendo el componente. x ejemplo: el de bariloche tiene que ir en el componente bariloche, y mostrar el mapa de bariloche.

5. tengo un carrousell, que dependiendo el componente tiene que tener 10 imagenes. (pasa lo mismo que con el mapa, no se como mostrarlo dependiendo el componente.) siempre respetando de ser posible que alla una estructura para todos

6. si no conoces storybook saltate esta duda numero 7, pero si lo conoces, cuando abro storybook me tira que hay un error en la mayoria de los storybook, con respecto al navigate, todo pareciera estar en orden, no le encontre la solucion

7. los css conviene ponerlos dentro de cada componente? o siempre lo mas cerca del router posible?

8. el css se puede importar de alguna manera como para que no quede tan largo?

9. si sabes usar tag managaer: el cartel de cookies funciona con tag manager, cree un script que me tiene que llegar al localstorage, pero vas a ver que no recibo nunca el script x un error que no pude resolver. dependiendo de si esta ese script o no se muestra o se oculta el cartel de cookies (el script adentro no tiene nada importante es un simple console log, lo importante es el script en si que me genera esa funcionalidad) adicionalmente el footer fondo de cookies tiene que mostrarse y ocultarse siempre que el cartel de cookies lo haga. ese fondo no permite que el usuario toque nada hasta que se acepten las cookies, pero nunca logre hacer que el fondo funcione como el cartel, lo intente en la pag anterior y no pude resolverlo, si no encuentro solucion pienso sacarlo

10. puedo crear un index.jsx pero para exportar todas las pages? asi el app.jsx no queda con esos imports tan feos

11. el logo de react me aparece en la pantalla de inicio, cuando se tendria que mostrar el logo de brujula, si voy a otras paginas si me aparece lo cual es raro porque yo lo cambie en el html para que sea el mismo en todas las paginas. depende el momento puede aparecer en todas las paginas el icono de react muy raro todo

12. quiero que al clickear en contacto me lleve automaticamente a un formulario para que el usuario ponga datos, pero no se como hacerlo, intento con el # en app.js pero no funciono x ej si voy de empresa a contacto la ruta se me pone asi http://localhost:3000/Empresa#Contacto pero no me manda al form solo cambia la ruta D:

13. el header esta unos milimetros corrido, nunca pude arreglarlo, se que es una estupides pero no sale .-.

14. DevTools no ha podido cargar el mapa de la fuente: No se ha podido cargar contenido de chrome-extension://pccckmaobkjjboncdfnnofkonhgpceea/js/hls.js.map: Error del sistema: net::ERR_BLOCKED_BY_CLIENT. sabes como sacar este error de consola? wtf.

15. El preloader funciona como deberia? veo que se desvanece super rapido y me funciona solo en inicio, y tiene que ser para todas las paginas

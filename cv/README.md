# CV

El currículum vive aquí en [JSON Resume](https://jsonresume.org), y de aquí salen
los dos PDF que el portfolio ofrece a descargar en `public/cvs/`.

```
cv/
  resume.es.json      los datos, en español   → public/cvs/ES.pdf
  resume.en.json      los datos, en inglés    → public/cvs/EN.pdf
  themes.mjs          los temas disponibles y cuál se usa
  theme/              el tema de la casa: de resume.json a HTML imprimible
  scripts/build.mjs   HTML + impresión a PDF
  scripts/audit.mjs   qué de todo eso llega a leer un ATS
  .out/<tema>/        HTML y texto intermedios (no se versiona)
```

## El día a día

Se edita el `.json`, nunca el PDF ni el HTML:

```bash
npm run cv            # valida, genera los dos PDF y los audita
```

Por partes, cuando se está iterando:

| Comando               | Qué hace                                                                             |
| --------------------- | ------------------------------------------------------------------------------------ |
| `npm run cv:validate` | Valida los dos ficheros contra el schema oficial de JSON Resume                      |
| `npm run cv:html`     | Sólo el HTML, sin abrir el navegador: `cv/.out/<tema>/es.html` se recarga en el acto |
| `npm run cv:build`    | Genera `public/cvs/ES.pdf` y `public/cvs/EN.pdf`                                     |
| `npm run cv:audit`    | Extrae el texto de los PDF y comprueba que está todo                                 |
| `npm run cv:setup`    | Descarga el Chromium de Puppeteer (una vez, tras clonar)                             |

Los PDF **sí se versionan**: son lo que sirve el sitio.

## Los temas

Hay dos, y el que manda es
[`harvard-classic`](https://jsonresume.org/themes/harvard-classic), el tema de
`jsonresume-theme-harvard-classic`: una columna, masthead centrado en serif y
rayas finas.

| Tema              | Cómo se pide                                              |
| ----------------- | --------------------------------------------------------- |
| `harvard-classic` | el de por defecto, no hay que pedir nada                  |
| `local`           | `npm run cv:local`, o `--theme=local` en un script suelto |

`cv:local` es `CV_THEME=local npm run cv`. La variable de entorno existe porque
`npm run cv` encadena tres scripts y un `-- --theme=local` sólo llegaría al
último; `CV_THEME` llega a los tres.

Un tema se declara en `themes.mjs` con dos cosas: su `render({ resume, language })`
y un `sectionTitles` que dice con qué rótulos va a salir cada sección, que es lo
que el auditor necesita para comprobar el orden. Los de `harvard-classic` se
leen del HTML que acaba de generar, no copiados aquí: el tema no los exporta, y
así un cambio de versión no deja al auditor comprobando rótulos que ya no se
imprimen.

El idioma se le pasa a `harvard-classic` por `meta.language`, inyectado en
`themes.mjs` y no escrito en los `resume.*.json`: es cosa del tema, y en los
datos sólo va lo que es verdad de la persona. De ahí saca sus rótulos
(`EXPERIENCIA` / `EXPERIENCE`…) y el `lang` del documento.

### Los dos ajustes sobre harvard-classic

Son los únicos, y están los dos en `themes.mjs`.

**`ATS_FIX`.** El tema maqueta las skills y los idiomas en una rejilla de dos
columnas —nombre estrecho a la izquierda, valor a la derecha— y eso se lee mal
cuando un extractor vacía una columna entera antes que la otra: el PDF acaba
diciendo `Español Inglés Nativo Fluido`, donde ya no consta quién es nativo de
qué, y parte `Architecture and practices` en dos trozos con la lista de keywords
en medio. Apiladas las dos celdas, el emparejamiento sobrevive. Lleva
`!important` porque el tema declara la rejilla con dos clases hasheadas y gana
por especificidad; sin él la regla se aplica y no hace nada.

**`FIT_FIX`.** Que el CV quepa en dos páginas. Al imprimir, el tema mezcla dos
tamaños sin querer: los bullets de experiencia salen a 12px y las skills y los
idiomas a 14px, así que lo accesorio se lee más grande que los logros.
Igualándolo todo a 12px y recortando dos milímetros de margen, el CV pasa de
tres páginas a dos **sin tocar el interlineado**, que es lo que de verdad se
nota. Depende del contenido: si el CV crece volverá a desbordar, y por eso el
auditor imprime el número de páginas en cada tirada.

### El tema de la casa

En `theme/`. Una columna, encabezados estándar, texto que es texto, y nada que
venga de fuera: ni tipografías remotas ni hojas de estilo aparte, así que el
HTML se abre en un navegador y se ve exactamente lo que saldrá impreso.

Sus rótulos de sección viven en `theme/labels.mjs`. Añadirle un idioma es añadir
su entrada ahí y su `resume.<idioma>.json`. El tamaño de página y los márgenes
están en el `@page` de `theme/styles.mjs` y en ningún otro sitio: `build.mjs`
imprime con `preferCSSPageSize`, que respeta el `@page` de cualquier tema.

## Por qué hay un auditor

Ningún portal de empleo lee `resume.json`. Lee el PDF, y de él un extractor saca
el texto como puede. `npm run cv:audit` hace exactamente eso —`pdftotext` sin
`-layout`, que es el modo tonto y por tanto el suelo— y comprueba cuatro cosas:

- que **cada** línea del `resume.json` se lea en el PDF (se construye de los
  datos: un bullet nuevo trae su comprobación sin tocar nada);
- que las dos mitades de un dato sigan juntas: una competencia y sus keywords,
  un idioma y su nivel. Que ambas se lean por separado no basta;
- que los encabezados salgan en el mismo orden en que los escribe el tema, que
  es lo que delata una maquetación que no se lee en una sola columna;
- cuántas páginas ocupa.

Deja el texto extraído en `cv/.out/<tema>/es.txt` y `en.txt` para mirarlo a
mano. Necesita `pdftotext` y `pdfinfo` (`sudo apt install poppler-utils`).

Ya ha servido dos veces:

- con la tipografía apretada del tema de la casa, la línea se partía en
  `end-to-end` y `pdftotext` se comía el guión, así que el PDF decía `end-toend`
  y dejaba de responder a una búsqueda por esa palabra. De ahí que ese tema
  envuelva los términos con guión en `.nowrap`;
- al traer `harvard-classic`, cazó su rejilla de dos columnas: 7 de los 8
  emparejamientos del CV se perdían al extraer el texto.

## Mantener los datos

- Las fechas son `"AAAA-MM"`. Un puesto abierto **omite `endDate`**; no se pone
  una fecha futura. El tema escribe entonces "Actualidad" / "Present".
- Los idiomas van en `languages`, no en `skills`: `harvard-classic` les da su
  propia sección y el tema de la casa los pinta como una línea más al final de
  las skills.
- Si se renombra un PDF hay que cambiarlo también en
  `src/components/Presentation/hooks/usePresentation.tsx`, que es quien los
  enlaza desde el botón de descarga.

## Tipografías remotas

`harvard-classic` pide Libre Baskerville a Google Fonts. `build.mjs` espera a
`networkidle0` y a `document.fonts.ready` antes de imprimir, porque sin esa
espera el PDF sale con la tipografía de reserva y la paginación cambia de una
máquina a otra. Si no hubo red, avisa por consola en vez de callarse: el PDF de
esa tirada no es el que se está viendo en el navegador.

# CV

El currículum vive aquí en [JSON Resume](https://jsonresume.org), y de aquí salen
los dos PDF que el portfolio ofrece a descargar en `public/cvs/`.

```
cv/
  resume.es.json      los datos, en español   → public/cvs/ES.pdf
  resume.en.json      los datos, en inglés    → public/cvs/EN.pdf
  theme/              el tema: de resume.json a HTML imprimible
  scripts/build.mjs   HTML + impresión a PDF
  scripts/audit.mjs   qué de todo eso llega a leer un ATS
  .out/               HTML y texto intermedios (no se versiona)
```

## El día a día

Se edita el `.json`, nunca el PDF ni el HTML:

```bash
npm run cv            # valida, genera los dos PDF y los audita
```

Por partes, cuando se está iterando:

| Comando | Qué hace |
| --- | --- |
| `npm run cv:validate` | Valida los dos ficheros contra el schema oficial de JSON Resume |
| `npm run cv:html` | Sólo el HTML, sin abrir el navegador: `cv/.out/es.html` se recarga en el acto |
| `npm run cv:build` | Genera `public/cvs/ES.pdf` y `public/cvs/EN.pdf` |
| `npm run cv:audit` | Extrae el texto de los PDF y comprueba que está todo |
| `npm run cv:setup` | Descarga el Chromium de Puppeteer (una vez, tras clonar) |

Los PDF **sí se versionan**: son lo que sirve el sitio.

## Por qué hay un auditor

Ningún portal de empleo lee `resume.json`. Lee el PDF, y de él un extractor saca
el texto como puede. `npm run cv:audit` hace exactamente eso —`pdftotext` sin
`-layout`, que es el modo tonto y por tanto el suelo— y comprueba tres cosas:

- que **cada** línea del `resume.json` se lea en el PDF (se construye de los
  datos: un bullet nuevo trae su comprobación sin tocar nada);
- que los encabezados salgan en el mismo orden en que se escribieron, que es lo
  que delata una maquetación que no se lee en una sola columna;
- cuántas páginas ocupa.

Deja el texto extraído en `cv/.out/es.txt` y `cv/.out/en.txt` para mirarlo a
mano. Necesita `pdftotext` y `pdfinfo` (`sudo apt install poppler-utils`).

Ya ha servido para algo: con la tipografía apretada, la línea se partía en
`end-to-end` y `pdftotext` se comía el guión, así que el PDF decía `end-toend` y
dejaba de responder a una búsqueda por esa palabra. De ahí que el tema envuelva
los términos con guión en `.nowrap`.

## El tema

Una columna, encabezados estándar, texto que es texto. Nada de barra lateral, de
iconos de fuente en los datos de contacto ni de barras de nivel en las skills:
lo que no sea texto seleccionable no existe para quien criba candidatos.

Los rótulos de sección (`EXPERIENCIA PROFESIONAL`, `PROFESSIONAL EXPERIENCE`…)
viven en `theme/labels.mjs`, no en los datos: son del tema. Añadir un idioma es
añadir su entrada ahí y su `resume.<idioma>.json`.

El tamaño de página y los márgenes están en el `@page` de `theme/styles.mjs` y
en ningún otro sitio: `build.mjs` imprime con `preferCSSPageSize`.

`theme/index.mjs` exporta además un `render(resume)` con la firma que esperan
`resumed` y `resume-cli`, por si algún día el tema se usa desde fuera.

## Mantener los datos

- Las fechas son `"AAAA-MM"`. Un puesto abierto **omite `endDate`**; no se pone
  una fecha futura. El tema escribe entonces "Actualidad" / "Present".
- Los idiomas van en `languages`, no en `skills`: el tema ya los pinta como una
  línea más al final de la sección de skills.
- Si se renombra un PDF hay que cambiarlo también en
  `src/components/Presentation/hooks/usePresentation.tsx`, que es quien los
  enlaza desde el botón de descarga.

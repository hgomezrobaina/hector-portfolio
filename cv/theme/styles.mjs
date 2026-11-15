/**
 * El CSS del tema. Dos reglas lo gobiernan, y las dos son por el ATS:
 *
 * 1. **Una sola columna.** Nada de barra lateral. Los extractores de texto
 *    recorren la página en líneas horizontales, así que una columna lateral se
 *    les intercala con el cuerpo y el CV llega troceado al otro lado.
 * 2. **El texto es texto.** Ni iconos de fuente en los datos de contacto, ni
 *    barras de nivel en las skills, ni nada dibujado. Lo que no sea texto
 *    seleccionable no existe para quien lee el PDF con un parser.
 *
 * El tamaño de página vive aquí y no en el script de impresión: `build.mjs`
 * levanta `preferCSSPageSize`, así que `@page` es la única fuente de verdad del
 * formato y los márgenes.
 */
export const STYLES = `
  @page {
    size: letter;
    margin: 0.5in 0.7in;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Liberation Serif", "Times New Roman", Times, serif;
    font-size: 10pt;
    line-height: 1.28;
    color: #000;
  }

  a {
    color: #1155cc;
    text-decoration: underline;
  }

  .name {
    margin: 0 0 4pt;
    font-size: 23pt;
    font-weight: 700;
    text-align: center;
  }

  .contact {
    margin: 0 0 7pt;
    font-size: 9.5pt;
    line-height: 1.4;
    text-align: center;
  }

  .contact-separator {
    padding: 0 3pt;
  }

  .divider {
    margin: 0 0 7pt;
    border: 0;
    border-top: 1.1pt solid #000;
  }

  .summary {
    margin: 0 0 9pt;
    font-size: 9.5pt;
    font-style: italic;
    text-align: justify;
  }

  .section {
    margin-bottom: 8pt;
  }

  .section-title {
    margin: 0 0 5pt;
    padding: 0 0 1.5pt 2pt;
    border-bottom: 1.1pt solid #000;
    font-size: 11pt;
    font-weight: 700;
    letter-spacing: 0.3pt;
    text-transform: uppercase;
  }

  /*
   * La entrada SÍ puede partirse entre dos páginas. Prohibírselo parece más
   * limpio y sale carísimo: una experiencia de nueve bullets no cabe en lo que
   * queda de hoja, salta entera a la siguiente y deja media página en blanco.
   * Lo que no puede partirse es un bullet por dentro, ni el encabezado de la
   * entrada quedarse solo al pie sin nada debajo.
   */
  .entry {
    margin-bottom: 7pt;
  }

  .entry-head {
    break-after: avoid;
  }

  .entry:last-child {
    margin-bottom: 0;
  }

  .entry-line {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 14pt;
  }

  .entry-name {
    font-weight: 700;
  }

  .entry-place {
    font-weight: 700;
    white-space: nowrap;
  }

  .entry-period {
    font-style: italic;
    white-space: nowrap;
  }

  /* El bullet se pinta a mano para poder darle su tamaño sin tocar el texto. */
  .bullets {
    margin: 4pt 0 0;
    padding: 0 0 0 14pt;
    list-style: none;
  }

  .bullets > li {
    position: relative;
    break-inside: avoid;
    margin-bottom: 2.5pt;
    padding-left: 11pt;
    text-align: justify;
  }

  .bullets > li:last-child {
    margin-bottom: 0;
  }

  .nowrap {
    white-space: nowrap;
  }

  .bullets > li::before {
    content: "\\25CF";
    position: absolute;
    top: -0.5pt;
    left: 0;
    font-size: 7.5pt;
  }
`

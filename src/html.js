export function page(...content) {
  return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>conlang</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>
  <div class="container my-5">
  ${content.join('\n\n')}
  </div>
</body>

</html>`
}

export function section(...content) {
  return content.join('\n\n')
}

export function title(text) {
  return `<h1> ${text}</h1>`
}

export function heading(text) {
  return `<h2 class="mt-4 mb-2"> ${text}</h2>`
}

export function table(cells, widths = {}) {
  return `<div>\n${cells.map(row =>
    ` <div class="row">\n${row.map((cell, c) =>
      `  <div class="col-sm${widths[c] ? '-' + widths[c] : ''}">${cell}</div>`)
      .join('\n')}\n </div>`)
    .join('\n')}\n</div>`
}

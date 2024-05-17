/* //? 1 Add Document Elements with D3
const anchor = d3.select('body')
.append('h1')
.text('Learning D3'); */
//? 2 Select a Group of Elements with D3
const anchor = d3
  .selectAll('li')
  .text('list item');
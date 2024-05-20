
/* //? 1 Add Document Elements with D3
const anchor = d3.select('body')
.append('h1')
.text('Learning D3'); */
/* //? 2 Select a Group of Elements with D3
const anchor = d3
  .selectAll('li')
  .text('list item'); */
/* //? 3 Work with Data in D3
  const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
  d3.select('body')
    .selectAll('h2')
    .data(dataset)
    .enter()
    .append('h2')
    .text('New Title'); */
/* //? 4 Work with Dynamic Data in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  // Add your code below this line
  .text((d) => d + " USD");*/
/* //? 5 Add Inline Styling to Elements
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))
  // Add your code below this line
  .style('font-family', 'verdana'); */
/* //? 6 Change Styles Based on Data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))
  // Add your code below this line
  .style('color', (d) => d < 20 ? 'red' : 'green'); */
/* //? 7 Add Classes with D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  // Add your code below this line
  .attr('class', 'bar'); */
/* //? 8 Update the Height of an Element Dynamically
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  // Add your code below this line
  .style('height', (d) => d + 'px'); */
/* //? 9 Change the Presentation of a Bar Chart
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => (d*10 + "px")) // Change this line */
/* //? 10 Learn About SVG in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h) */
/* //? 11 Display Shapes with SVG
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h)
              .append("rect")
              .attr("width", 25)
              .attr("height", 100)
              .attr("x", 0)
              .attr("y", 0) */
/* //? 12 Create a Bar for Each Data Point in the Set
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       // Add your code below this line
       .data(dataset)
       .enter()
       .append("rect")
       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100); */
//? 13 Dynamically Set the Coordinates for Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => {
     // Add your code below this line
      return i * 30;
     // Add your code above this line
   })
   .attr("y", 0)
   .attr("width", 25)
   .attr("height", 100);
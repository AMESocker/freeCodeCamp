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
/* //? 13 Dynamically Set the Coordinates for Each Bar
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
   .attr("height", 100); */
/* //? 14 Dynamically Change the Height of Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 500;

const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", (d, i) => i * 30)
   .attr("y", 0)
   .attr("width", 25)
   .attr("height", (d, i) => {
     // Add your code below this line
      return d * 10;
     // Add your code above this line
   }); */
/* //? 15 Invert SVG Elements
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => {
     // Add your code below this line
      return h - 3 * d;
     // Add your code above this line
   })
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d);    */
/* //? 16 Change the Color of an SVG Element   
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .attr("fill", "navy"); */
/* //? 17 Add Labels to D3 Elements
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .attr("fill", "navy");

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => d)
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d - 3) */
/* //? 18 Style D3 Labels
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => d * 3)
   .attr("fill", "navy");

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => d)
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - (3 * d) - 3)
   // Add your code below this line
   .attr('fill', 'red')
   .style('font-size', '25px') */
/* //? 19 Add a Hover Effect to a D3 Element
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => 3 * d)
   .attr("fill", "navy")
   // Add your code below this line
   .attr('class', 'bar')
   // Add your code above this line

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => d)
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - (3 * d) - 3); */
/* //? 20 Add a Tooltip to a D3 Element
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
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - 3 * d)
   .attr("width", 25)
   .attr("height", (d, i) => d * 3)
   .attr("fill", "navy")
   .attr("class", "bar")
   // Add your code below this line
   .append('title')
    .text((d) => d)
   // Add your code above this line

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text((d) => d)
   .attr("x", (d, i) => i * 30)
   .attr("y", (d, i) => h - (d * 3 + 3)) */
/* //? 21 Create a Scatterplot with SVG Circles
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];


const w = 500;
const h = 500;

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle") */
/* //? 22 Add Attributes to the Circle Elements  
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];


const w = 500;
const h = 500;

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
// Add your code below this line
.attr('cx', (d) => d[0])
.attr('cy', (d) => h - d[1])
.attr('r', 15) */
/* //? 23 Add Labels to Scatter Plot Circles
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

const w = 500;
const h = 500;

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d, i) => d[0])
.attr("cy", (d, i) => h - d[1])
.attr("r", 5);

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) => d[0] + ", " + d[1])
.attr("x", (d) => d[0] + 5)
.attr("y", (d) => h - d[1]); */
/* //? 24 Create a Linear Scale with D3
    // Add your code below this line
    const scale = d3.scaleLinear(); // Create the scale here
    const output = scale(50); // Call scale with an argument here
    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output); */
/* //? 25 Set a Domain and a Range on a Scale      
    // Add your code below this line
    const scale = d3.scaleLinear();
    scale.domain([250, 500]);
    scale.range([10, 150]);


    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output); */
/* //? 26 Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
// Add your code below this line
const output = d3.max(positionData, (d) => d[2]);
// Add your code above this line
d3.select("body")
  .append("h2")
  .text(output) */
/* //? 27 Use Dynamic Scales
const dataset = [
  [ 34,    78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,    411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,   333 ],
  [ 78,    320 ],
  [ 21,    123 ]
];

const w = 500;
const h = 500;

// Padding between the SVG boundary and the plot
const padding = 30;

// Create an x and y scale
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

// Add your code below this line
const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);
// Add your code above this line

const output = yScale(411); // Returns 30
d3.select("body")
.append("h2")
.text(output) */
/* //? 28 Use a Pre-Defined Scale to Place Elements
const dataset = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ]
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[0])])
     .range([padding, w - padding]);

const yScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[1])])
     .range([h - padding, padding]);

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
// Add your code below this line
.attr("cx", (d) => xScale(d[0]))
.attr("cy", (d) => yScale(d[1]))
.attr("r", 5);
// Add your code above this line
svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + ", "
+ d[1]))
// Add your code below this line
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1])) */
//? 29 Add Axes to a Visualization
const dataset = [
  [ 34,     78 ],
  [ 109,   280 ],
  [ 310,   120 ],
  [ 79,   411 ],
  [ 420,   220 ],
  [ 233,   145 ],
  [ 333,   96 ],
  [ 222,    333 ],
  [ 78,    320 ],
  [ 21,   123 ]
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[0])])
     .range([padding, w - padding]);

const yScale = d3.scaleLinear()
     .domain([0, d3.max(dataset, (d) => d[1])])
     .range([h - padding, padding]);

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg.selectAll("circle")
.data(dataset)
.enter()
.append("circle")
.attr("cx", (d) => xScale(d[0]))
.attr("cy",(d) => yScale(d[1]))
.attr("r", (d) => 5);

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text((d) =>  (d[0] + "," + d[1]))
.attr("x", (d) => xScale(d[0] + 10))
.attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
// Add your code below this line
const yAxis = d3.axisLeft(yScale);
// Add your code above this line

svg.append("g")
.attr("transform", "translate(0," + (h - padding) + ")")
.call(xAxis);

// Add your code below this line
svg.append("g")
.attr("transform", "translate(" + padding + ",0)")
.call(yAxis);
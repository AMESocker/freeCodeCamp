const jsonDataURL = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json';

const w = 2015;
const h = 350;

const svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

// const scale = d3.scaleLinear();
// scale.domain([1990, 2015])
//   .range([1990, 2015]);

d3.json(jsonDataURL)
  .then(data => {
    console.log(data);

    svg
    .selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('r', 6)
    .attr('cx', d => d.Year)
  })
/*   const dataset = [
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
  const h = 350;
  
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
  .attr('r', 6) */
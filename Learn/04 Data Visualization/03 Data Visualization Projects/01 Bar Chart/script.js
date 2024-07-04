const chartDiv = document.getElementById('chart')
const dataset = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'

fetch(dataset)
  .then(response => response.json())
  .then(data => {
    displayData(data.data)
  })

const displayData = (dataResponse) => {
  const dataset = dataResponse;



  const w = 900;
  const h = 500;
  const padding = 20;
  const barWidth = (w - padding) / dataset.length;

  const xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d) => d[0]), d3.max(dataset, (d) => d[0])])
    .range([0, w - padding]);

  const svg = d3.select(chartDiv)
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "bar-chart")

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr("x", (d, i) => i * barWidth)
    .attr("y", (d) => h - d[1] / 40)
    .attr("width", (barWidth))
    .attr("height", (d) => d[1])
    .attr("class", "bar")
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    // .append('title')
    .attr('id', 'tooltip')


  const xAxis = d3.axisBottom(xScale);

  //get year from dataset
  const getYear = (date) => {
    return date.substring(0, 4)
  }
  dataset.forEach((d) => {
    d[0] = getYear(d[0])
  })
  console.log(dataset)

  svg.append("g")
    .attr('id', 'x-axis')
    .attr("transform", "translate(0," + (h - padding) + ")")

  svg.append("g")
    .attr('id', 'y-axis')
    .attr("transform", "translate(" + padding + ", 0)")
    .call(d3.axisLeft(d3.scaleLinear().domain([0, d3.max(dataset, (d) => d[1])]).range([h - padding, 0])))


}
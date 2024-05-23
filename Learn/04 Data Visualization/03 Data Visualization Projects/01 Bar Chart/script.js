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
  const barWidth = w / dataset.length;

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
    .attr("width", barWidth)
    .attr("height", (d) => d[1])
    .attr("class", "bar")



}


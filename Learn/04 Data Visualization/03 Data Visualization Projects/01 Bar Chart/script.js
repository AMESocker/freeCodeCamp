const chartDiv = document.getElementById('chart')
const dataset = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'

d3.json(dataset)
  .then(data => {
    displayData(data.data)
  })

const displayData = (dataResponse) => {
  const dataset = dataResponse;

  const chartWidth = 600;
  const chartHeight = 350;
  const padding = 40;
  const barWidth = (chartWidth - (padding*2)) / dataset.length;

  // SVG element
  const svg = d3.select(chartDiv)
    .append("svg")
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("class", "bar-chart")

  // Bars  
  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    //where the bars are placed
    .attr("x", (d, index) => (index * barWidth) + padding)
    .attr("y", (d) => (chartHeight - padding) - d[1] / 60)
    //size of the bars
    .attr("width", (barWidth))
    .attr("height", (d, i) => (d[1]) / 60)
    //styling
    .attr("class", "bar")
    .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    // .append('title')
    // .text((d) => d[0])
    // .attr('id', 'tooltip')
    // .attr('data-date', (d) => d[0])
    .on('mouseover', function (d, i) {
      // tooltip.transition()
      //   .duration(200)
      //   .style('opacity', 0.9)
      d3.select(this)
      .append('title')
      .attr('id', 'tooltip')
      .html(d[0] + '<br>' + '$' + d[1] + ' Billion')
        .attr('data-date', d[0])
        // .style('left', (d3.event.pageX) + 'px')
        // .style('top', (d3.event.pageY - 28) + 'px')
    })
  // X-axis
  const xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d) => d[0].substring(0, 4)), d3.max(dataset, (d) => d[0].substring(0, 4))])
    .range([padding, chartWidth-padding]);

  const xAxis = d3.axisBottom(xScale);

  svg.append('g')
    .attr('transform', 'translate(0, ' + (chartHeight - padding) + ')')
    .attr('id', 'x-axis')
    .call(xAxis)

  // Y-axis
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([chartHeight - padding, padding]);

  const yAxis = d3.axisLeft(yScale);

  svg.append('g')
    .attr('transform', 'translate(' + padding + ', 0)')
    .attr('id', 'y-axis')
    .call(yAxis)





}
const dataset = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json'


const req = new XMLHttpRequest();
req.open('GET', dataset, true);
req.send();



const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;//?12

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => { a - b })//?21
  const median = array.length % 2 === 0
    ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
    : sorted[Math.floor(array.length / 2)];//?22
  return median;//?23
}

const getMode = (array) => {
  
  const counts = {}
  array.forEach((el) => {
    counts[el]++
    console.log(counts)
  })

  // if (new Set(Object.values(counts)).size === 1) {
  //   return null
  // }//?28

  const highest = Object.keys(counts)
    .sort((a, b) => counts[b] - counts[a])[0];
    // console.log(highest)
  const mode = Object.keys(counts)
    .filter((el) => counts[el] === counts[highest])
    // console.log(mode)
  return mode.join(', ')
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}//?35

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el)=>{
    const difference = el - mean;
    const squared = difference**2;
    return acc+squared
  },0) / array.length;
  return variance
}

const getStandardDeviation = (array)=>{
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}

const calculate = () => {
  const value = document.querySelector('#numbers').value
  const array = value.split(/,\s*/g); //?3
  const numbers = array
    .map((el) => Number(el)) //?4
    .filter((el) => !isNaN(el)); //?7
    console.log(numbers)
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  const variance = getVariance(numbers);
  const standardDeviation = getStandardDeviation(numbers);

  document.querySelector('#mean').textContent = mean;
  document.querySelector('#median').textContent = median;
  document.querySelector('#mode').textContent = mode;
  document.querySelector('#range').textContent = range;
  document.querySelector('#variance').textContent = variance;
  document.querySelector('#standardDeviation').textContent = standardDeviation;
};







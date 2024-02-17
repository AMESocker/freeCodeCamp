const sortButton = document.getElementById('sort');

const sortInputArray = (event) =>{
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName('values-dropdown')
  ].map((dropdown)=>Number(dropdown.value));

const sortedValues = selectionSort(inputValues);

updateUI(sortedValues)
};

const updateUI = (array = []) => {
  array.forEach((num,i)=>{
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num
  })
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {console.log(array,array[i])
    for (let j = 0; j < array.length - 1; j++) {
      // console.log(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) { console.log('j > j+1',array[j], array[j + 1])
        let temp = array[j];
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}//? The first sorting algorithm you will implement is the bubble sort, which starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex
    for (let j = 0; j < array.length; j++) {
      
    }
  }
}//? Selection sort works by finding the smallest value in the array, then swapping it with the first value in the array. Then, it finds the next smallest value in the array, and swaps it with the second value in the array. It continues iterating through the array until it is completely sorted.

sortButton.addEventListener('click',sortInputArray);
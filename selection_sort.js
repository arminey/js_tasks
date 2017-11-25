function swap(arr, index1, index2) {
  let tmp = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = tmp;
}

function SelectionSort(arr) {
  if(!Array.isArray(arr)) { 
    throw new Error("Invalid argument. There isn't array.");
  }
  if(arr.some(isNaN)) {
    throw new Error("Not all elements are number.");   
  }
  let size = arr.length, min;
  if(size <= 1) {
    return arr;
  }
  for(let i = 0; i < size; ++i) {
    min = i;
    for(let j = i + 1; j < size; ++j) {
      if(arr[j] < arr[min])
        min = j;
    }
    if( i != min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

let a = [1,2,3,5,7,6,10,3,44];

SelectionSort(a);
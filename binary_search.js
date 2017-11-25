function check(arr) {
  let rcount = 0, lcount = 0;
  for(let i = 0; i < arr.length; ++i) {
    if (arr[i] <= arr[i+1]) {
        ++rcount;
    }
  }
  for(let i = 0; i < arr.length; ++i) {
    if (arr[i] >= arr[i+1]) {
        ++lcount;
    }
  }
  if(rcount == arr.length - 1) return 1;
  if(lcount == arr.length - 1) return 0;
  return ("unsorted array");
}

function bsearch(arr, n) {
  if(!Array.isArray(arr)) 
    console.log("Invalid argument. There isn't array.");
  if(arr.some(isNaN))
    console.log("Not all elements are number.");  
  let size = parseInt(arr.length / 2);
  if(n === arr[size]) {
    // console.log(size);
    return arr[size];
  }
  if(size < 1){
    console.log("there is no number ", n);
    return false;
  }
  if(n < arr[size] && check(arr) === 1) 
    return bsearch(arr.slice(0, size), n);
  if(n < arr[size] && check(arr) === 0)
    return bsearch(arr.slice(size), n);
  if(n > arr[size] && check(arr) === 1)  
    return bsearch(arr.slice(size), n);
  if(n > arr[size] && check(arr) === 0)
    return bsearch(arr.slice(0, size), n);
  if(n != arr[size] && size === 1) {
    return "ajdga";
  }  
}

let arr = [1, 2, 3, 's',4, 5, 6];
let arr1 = [6, 5, 4, 3, 2, 1];
bsearch(arr, 4);

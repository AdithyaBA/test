let arr = [1,2,3,1,1,4,5,3,3];

let dup = [];

function duplicate(arr){
  for(let i=0; i<arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      if(!dup.includes(arr[i])){
        dup.push(arr[i])
      }
    }
  }
  return dup;
}

duplicate(arr)
console.log(dup);
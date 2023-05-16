let obj1 = {
  fName: "adi"
}

let obj2 = {
  fName: "ram"
}

function count(age, cage){
  console.log(`${this.fName}, ${cage}`);
}
count.apply(obj2, [100, 200, 300])
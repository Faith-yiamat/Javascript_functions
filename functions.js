// question1
function reverse(sortedArr,indices){
  // make a copy of an array
  const sortedArr = [...arr];
  indices.forEach(idx => {
      //specific indexes
      if(idx < sortedArr.length){
          sortedArr[idx] = sortedArr[idx].split('').reverse().join('');
      }
  })
  sortedArr.sort()
  return sortedArr
}
const sortedArr= ["Apple","Kiwi","Orange","Banana"];
const indices = [2,3];
const resu = reverse(arr,indices);
console.log(resu);
let r = str.indexOf("Kiwi");
console.log(r);

//question2
function array(e){
  let negative = e.filter((element) => element < 0 );
  let positive = e.filter((element) => element >0);
  let Zero = e.filter((element) => element == 0);
  return {
      negative,
      positive,
      Zero
  }

}
var e = [23,45,67,-78,-89,0];
console.log(array(e));

// que3
let arrayOfstr = [
  {"id" :"nnewnfiu398",
  "name": "fathmbcdm",
  "salary":40000
},

{"id" :"nnewnfiu398",
"name": "fathmbcdm",
"salary":40000
},
{"id" :"nnewnfiu398",
"name": "fathmbcdm",
"salary":40000
},
{"id" :"nnewnfiu398",
"name": "fathmbcdm",
"salary":40000
}


 ]
 let sortedArrayOfstr = arrayOfstr.sort(
  (salary1,salary2) => (salary1.salary < salary2.salary)? -1 :(salary1.salary2 > salary2.salary)?
  1:0)
  console.log(sortedArrayOfstr)


//question4
function multiply2(numbers){
  numbers.forEach(number =>
      {console.log(number * 2)})
}

let numbers = [46,89,6,7,45]
multiply2(numbers)

//question5
function manipulateArray(arr) {
  //multiply the first four items
  for(let i= 0; i < 4 && i< arr.length; i++){
      arr[i] *= 8
  }
  // add the last two items by 5
  for(let i = arr.length -2;i< arr.length; i++){
       arr[i] +=5
  }
  //log the new array
 console.log(arr)
}

const arr = [2,3,4,5,16,17,78,90,56];
manipulateArray(arr);

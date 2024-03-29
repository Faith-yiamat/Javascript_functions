  //que 1

 function reverse(){
   var a = ["Good","Bad","Very","Awesome"];
   var b = a.sort();
    return (b)
    
    
 }
console.log( reverse());


 function multiply(){
  var a =[3,4,5,6,7]

 }

   //que 2
 var e = [4,5,6,7,-1,-2,-3]
 function array(){
  let neg = e.filter((element) =>
  element<0);
  let pos = e.filter((element)=>
  element<0);
  let zero = e.filter((element) =>
  element==0);
  return{
    neg :neg,
    pos :pos,
    zero :zero
  }
 }
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
 
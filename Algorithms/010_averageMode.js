/*
Averages/Mode
Write a function mode to find the value that appears most in an array.

The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.

If it is not appropriate or possible to support a general collection, use a vector (array), if possible. 
If it is not appropriate or possible to support an unspecified value type, use integers.


*/

function mode(arr) {
      let maxCount = 0;
      let countElements = 0;
      let result = [];
      let copyArr = arr.filter((element,index)=>{
            return index === arr.indexOf(element);
      });
      copyArr.map((element)=>{
            countElements = numOfElements(arr, element);
            if(countElements > maxCount){
                  maxCount = countElements;
                  result = [];
                  result.push(element);
            } else{
                  if(countElements === maxCount){
                        result.push(element);
                  }
            }
      });
      console.log(result);
      return result;
}

let numOfElements = (array, element) =>{
      let countElement = 0;
      for(let i = 0; i < array.length; i++){
            if(array[i] === element){
                  countElement++;
            }
      }
      return countElement;
}

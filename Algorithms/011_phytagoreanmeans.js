/*

Averages/Pythagorean means
Compute all three of the Pythagorean means of the set of integers 1 through 10 (inclusive).

Show that A(x1,…,xn)≥G(x1,…,xn)≥H(x1,…,xn) for this set of positive integers.

The most common of the three means, the arithmetic mean, is the sum of the list divided by its length:
A(x1,…,xn)=x1+⋯+xnn
The geometric mean is the nth root of the product of the list:
G(x1,…,xn)=x1⋯xn−−−−−−−√n
The harmonic mean is n divided by the sum of the reciprocal of each item in the list:
H(x1,…,xn)=n1x1+⋯+1xn
When writing your function, assume the input is an ordered array of all inclusive numbers.

For the answer, please output an object in the following format:

{
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
}

*/

function pythagoreanMeans(rangeArr) {
      let result = {
            values:{
            },
            test:''
      };
      
      result.values.Arithmetic = arithmetic(rangeArr);
      result.values.Geometric = geometric(rangeArr);
      result.values.Harmonic = harmonic(rangeArr);

      if(result.values.Arithmetic > result.values.Geometric && result.values.Geometric > result.values.Harmonic){
            result.test = 'is A >= G >= H ? yes';

      } else{
            result.test = 'is A >= G >= H ? no';
      }
      
      return result;
}

let arithmetic = (array) => {
      let result = 0;
      array.map((element)=>{
            result += element;
      });
      return result/array.length;
}

let geometric = (array) => {
      let result = 1;
      array.map((element)=>{
            result *= element;
      });

      return Math.pow(result, 1/array.length);
}

let harmonic = (array) =>{
      let result = 0;
      array.map((element)=>{
            result += 1/element;
      });
      return array.length/result;
}

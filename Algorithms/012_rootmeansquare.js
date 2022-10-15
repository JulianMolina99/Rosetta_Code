/*

Averages/Root mean square
Compute the Root Mean Square (RMS) of the numbers 1 through 10 inclusive.

The RMS is calculated by taking the square root of the mean of the squares of the numbers, given by the equation:

xrms=sqrt((x1^2+x2^2+⋯+xn&2)/n)

*/

function rms(arr) {
      let result = 0;
      arr.map((element)=>{
        result += Math.pow(element, 2);
      })
      return Math.sqrt(result/arr.length);
    }

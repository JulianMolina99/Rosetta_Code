/*
Amicable pairs
Two integers  N  and  M  are said to be amicable pairs if  N≠M  and the sum of the proper divisors of  N  ( sum(propDivs(N)) )  =M  as well as  sum(propDivs(M))=N .


Example:

1184 and 1210 are an amicable pair, with proper divisors:

1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.
The sum of the divisors for the first value, 1184, is 1210 and the sum of the divisors for the second value, 1210, is 1184.

Calculate and show here the Amicable pairs below 20,000 (there are eight).
*/
function amicablePairsUpTo(maxNum) {
      let result = [];
      let divisorsFirstNumber = 0;
      let divisorsSecondNumber = 0;
      let amicablePairs = true;
      for(let i = 200; i <= maxNum; i++){
            divisorsFirstNumber = sumOfDivisors(i);
            divisorsSecondNumber = sumOfDivisors(divisorsFirstNumber);
            if(divisorsSecondNumber === i && amicablePairs && i !== divisorsFirstNumber){
                  result.push([i, divisorsFirstNumber]);
                  amicablePairs = !amicablePairs;
            } else{
                  if(divisorsSecondNumber === i && i !== divisorsFirstNumber){
                        amicablePairs = !amicablePairs;
                  }
            }
      }

      return result;
}

let sumOfDivisors = (num)=>{
      let result = 1;
      for(let i = 2; i <= Math.floor(num/2); i++){
            if(num % i === 0){
                  result += i;
            }
      }
      return result;
}

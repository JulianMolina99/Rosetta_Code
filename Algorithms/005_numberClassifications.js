/*
Abundant, deficient and perfect number classifications
These define three classifications of positive integers based on their proper divisors.

Let  P(n)  be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.

If P(n) < n then n is classed as deficient

If P(n) === n then n is classed as perfect

If P(n) > n then n is classed as abundant

Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.

Implement a function that calculates how many of the integers from 1 to num (inclusive) are in each of the three classes. 
Output the result as an array in the following format [deficient, perfect, abundant].
*/

function getDPA(num){
      let classNum = [];
      let deficient = 3;
      let abundant = 0;
      let perfect = 0;
      let result = 0;
      for(let i = 4; i <= num; i++){
            result = sumOfDivisors(i);
            if(result === i){
                  perfect++;
            } else{
                  if(result > i){
                        abundant++;
                  } else{
                        deficient++;
                  }
            }
      }
      classNum[0] = deficient;
      classNum[1] = perfect;
      classNum[2] = abundant;
      return classNum;
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
